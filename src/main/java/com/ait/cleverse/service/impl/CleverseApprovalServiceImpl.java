package com.ait.cleverse.service.impl;

import com.ait.cleverse.dto.CleverseApprovalApplyDto;
import com.ait.cleverse.dto.CleverseApprovalSignerDto;
import com.ait.cleverse.mapper.CleverseApprovalMapper;
import com.ait.cleverse.service.CleverseApprovalService;
import com.ait.cleverse.util.TLS12SocketFactory;
import com.ait.sy.syAffirm.mapper.SyAffirmEmailMapper;
import hanwha.neo.branch.ss.approval.axisws.ApprovalServiceProxy;
import hanwha.neo.branch.ss.approval.vo.ApprovalDocument;
import hanwha.neo.branch.ss.approval.vo.ApprovalDocumentStatus;
import hanwha.neo.branch.ss.approval.vo.MisKey;
import hanwha.neo.branch.ss.approval.vo.ReceiverInfo;
import hanwha.neo.branch.ss.approval.vo.SignerInfo;
import hanwha.neo.branch.ss.approval.vo.WsApAttachFile;
import hanwha.neo.branch.ss.common.vo.WsAttachFile;
import hanwha.neo.branch.ss.common.vo.WsException;
import org.apache.axis.AxisFault;
import hanwha.neo.branch.ss.mail.service.MailServiceProxy;
import hanwha.neo.branch.ss.mail.service.WsMailInfo;
import hanwha.neo.branch.ss.mail.service.WsRecipient;
import hanwha.neo.branch.ss.org.service.NeoOrgWsProxy;
import hanwha.neo.branch.ss.org.vo.OrgUserVO;
import jakarta.annotation.PostConstruct;
import org.apache.axis.AxisProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionTemplate;
import org.springframework.web.util.HtmlUtils;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.locks.ReentrantLock;

/**
 * Port từ Hanwha_HAE: MailSendApprovalManager.sendAffirmInfoEmailApproval / sendApproval,
 * SendEmailSerImpl.getAffirmInfoEmailApproval và SendEmailSerImpl.synchronizationApprovalStatus.
 * <p>
 * Endpoint, systemId, companyId, tiền tố MISDOCID lấy từ application.properties (bản gốc hardcode).
 */
@Service
public class CleverseApprovalServiceImpl implements CleverseApprovalService {

    private static final Logger log = LoggerFactory.getLogger(CleverseApprovalServiceImpl.class);

    private static final String LEAVE_APPLY_TYPE_NO = "21";
    private static final String OT_OVER_APPLY_TYPE_NO = "310";
    private static final String TEMPLATE_PATH = "cleverse/approvalInfo.htm";

    /** Tránh 2 request lưu đơn đồng thời cùng lấy 1 đơn SEND_EMAIL_FLAG = 0 và gửi trùng sang Cleverse. */
    private final ReentrantLock sendLock = new ReentrantLock();

    @Autowired
    private CleverseApprovalMapper mapper;

    /** 1: gửi, 0: không gửi (APPROVAL_SEND_FLAG bản gốc) */
    @Value("${cleverse.approval.send-flag:1}")
    private String sendFlag;

    @Value("${cleverse.approval.endpoint}")
    private String approvalEndpoint;

    @Value("${cleverse.approval.org-endpoint}")
    private String orgEndpoint;

    @Value("${cleverse.approval.system-id:VISION_VHR}")
    private String systemId;

    @Value("${cleverse.approval.company-id:517}")
    private String companyId;

    @Value("${cleverse.approval.form-code:VISION_VHR}")
    private String formCode;

    @Value("${cleverse.approval.mis-doc-id-prefix:VISION_VHR_001_}")
    private String misDocIdPrefix;

    /** Mã NV dùng để kiểm tra kết nối NeoOrgWs trước khi gửi (bản gốc hardcode 20100196) */
    @Value("${cleverse.approval.health-check-empid:20100196}")
    private String healthCheckEmpId;

    @Value("${cleverse.approval.trust-all:true}")
    private boolean trustAll;

    /** Mã công ty dùng khi đồng bộ từ scheduler (không có session) - bản gốc hardcode 'HAE' */
    @Value("${cleverse.approval.cpny-id:HAE}")
    private String syncCpnyId;

    /** adminIP ghi vào PR_AFFIRM_EXECUTE để phân biệt duyệt từ Cleverse (bản gốc: hanwha.eagleoffice) */
    @Value("${cleverse.approval.sync-admin-ip:hanwha.eagleoffice}")
    private String syncAdminIp;

    /** 1: gửi mail báo bảo vệ qua Cleverse MailService, 0: không gửi nhưng vẫn đánh dấu ATTENDACE_FLAG (MAIL_SEND_FLAG bản gốc) */
    @Value("${cleverse.mail.send-flag:0}")
    private String mailSendFlag;

    @Value("${cleverse.mail.endpoint:https://epdev.cleverse.hanwha.com/soap/mail/axis/services/MailService}")
    private String mailEndpoint;

    @Value("${cleverse.mail.from:techwin.chr@hanwha.com}")
    private String mailFrom;

    @Value("${cleverse.mail.security-email:hae.security@hanwha.com}")
    private String securityEmail;

    @Autowired
    private SyAffirmEmailMapper affirmEmailMapper;

    @Autowired
    private PlatformTransactionManager transactionManager;

    private volatile String template;

    @PostConstruct
    public void initAxisSocketFactory() {
        // Bản gốc đăng ký trong static block của MailSendApprovalManager để fix lỗi PKIX/TLS với Cleverse
        if (trustAll) {
            String factoryClass = TLS12SocketFactory.class.getName();
            AxisProperties.setProperty("axis.socketSecureFactory", factoryClass);
            log.info("[Cleverse] Registered Axis socketSecureFactory: {}", factoryClass);
        }
    }

    /**
     * Không mở transaction bao ngoài: mỗi đơn gửi thành công phải được đánh dấu SEND_EMAIL_FLAG ngay
     * (auto-commit), nếu rollback cả lô thì đơn đã có trên Cleverse sẽ bị gửi trùng ở lần sau.
     */
    @Override
    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public int sendAffirmInfoEmailApproval() {
        if (!"1".equals(sendFlag)) {
            log.debug("[Cleverse] sendAffirmInfoEmailApproval skipped (send-flag={})", sendFlag);
            return 0;
        }
        sendLock.lock();
        try {
            NeoOrgWsProxy orgProxy = new NeoOrgWsProxy(orgEndpoint);
            if (!checkOrgConnection(orgProxy)) {
                return 0;
            }

            List<CleverseApprovalApplyDto> applyList = mapper.selectWaitSendApplyList(new HashMap<>());
            if (applyList == null || applyList.isEmpty()) {
                log.info("[Cleverse] No pending apply to send");
                return 0;
            }
            log.info("[Cleverse] Pending apply count: {}", applyList.size());

            Map<String, String> userKeyCache = new HashMap<>();
            int successCount = 0;
            for (CleverseApprovalApplyDto apply : applyList) {
                // Mỗi đơn xử lý độc lập, 1 đơn lỗi không dừng cả lô
                try {
                    if (sendOneApply(orgProxy, apply, userKeyCache)) {
                        successCount++;
                    }
                } catch (Exception e) {
                    log.error("[Cleverse] Send apply error, applyNo={}", apply.getApplyNo(), e);
                }
            }
            log.info("[Cleverse] sendAffirmInfoEmailApproval done: {}/{} sent", successCount, applyList.size());
            return successCount;
        } catch (Exception e) {
            log.error("[Cleverse] sendAffirmInfoEmailApproval error", e);
            return 0;
        } finally {
            sendLock.unlock();
        }
    }

    /**
     * Không mở transaction bao ngoài vì phải gọi web service Cleverse cho từng đơn; mỗi đơn được
     * cập nhật trong transaction riêng (TransactionTemplate) để 1 đơn lỗi không rollback đơn khác.
     */
    @Override
    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public int synchronizationApprovalStatus() {
        if (!"1".equals(sendFlag)) {
            log.debug("[Cleverse-Sync] skipped (send-flag={})", sendFlag);
            return 0;
        }
        try {
            Map<String, Object> params = new HashMap<>();
            params.put("cpnyId", syncCpnyId);
            List<CleverseApprovalApplyDto> approvalList = mapper.selectSyncApprovalList(params);
            if (approvalList == null || approvalList.isEmpty()) {
                log.info("[Cleverse-Sync] No apply to synchronize");
                return 0;
            }
            log.info("[Cleverse-Sync] Apply count to synchronize: {}", approvalList.size());

            // Map MISDOCID (Cleverse) -> đơn trong HR để khớp O(1)
            Map<String, CleverseApprovalApplyDto> applyByMisDocId = new HashMap<>();
            for (CleverseApprovalApplyDto apply : approvalList) {
                applyByMisDocId.put(misDocIdPrefix + safe(apply.getMisDocId()), apply);
            }

            ApprovalServiceProxy proxy = new ApprovalServiceProxy(approvalEndpoint);
            TransactionTemplate txTemplate = new TransactionTemplate(transactionManager);
            int processed = 0;
            for (Map.Entry<String, CleverseApprovalApplyDto> entry : applyByMisDocId.entrySet()) {
                CleverseApprovalApplyDto apply = entry.getValue();
                ApprovalDocumentStatus docStatus = getApprovalStatus(proxy, entry.getKey());
                // WS lỗi -> null / không có misDocId; status 4: bỏ qua (giữ logic bản gốc)
                if (docStatus == null || docStatus.getMisDocId() == null || docStatus.getStatus() == 4) {
                    continue;
                }
                try {
                    syncApprovalByApply(apply, docStatus.getSignerInfos(), txTemplate);
                    processed++;
                } catch (Exception e) {
                    log.error("[Cleverse-Sync] Error, applyNo={}", apply.getApplyNo(), e);
                }
            }
            log.info("[Cleverse-Sync] Done: {}/{} processed", processed, approvalList.size());
            return processed;
        } catch (Exception e) {
            log.error("[Cleverse-Sync] synchronizationApprovalStatus error", e);
            return 0;
        }
    }

    /** Port MailSendApprovalManager.getApprovalStatusByMisId - lỗi WS trả về null. */
    private ApprovalDocumentStatus getApprovalStatus(ApprovalServiceProxy proxy, String misDocId) {
        try {
            MisKey misKey = new MisKey();
            misKey.setSystemId(systemId);
            misKey.setMisDocId(misDocId);
            return proxy.getStatusByMisId(misKey);
        } catch (Exception e) {
            log.error("[Cleverse-Sync] getStatusByMisId error, misDocId={}, systemId={}{}", misDocId, systemId,
                    describeWsError(e), e);
            return null;
        }
    }

    /** Port SendEmailSerImpl.syncApprovalByApply: cập nhật trạng thái duyệt của 1 đơn vào SY_AFFIRM_EMAIL. */
    private void syncApprovalByApply(CleverseApprovalApplyDto apply, SignerInfo[] signerInfos,
                                     TransactionTemplate txTemplate) {
        if (signerInfos == null || signerInfos.length == 0) {
            return;
        }
        String applyNo = apply.getApplyNo();
        Map<String, Object> params = new HashMap<>();
        params.put("applyNo", applyNo);
        // Query đã lọc AFFIRM_FLAG = 0 và sắp xếp theo AFFIRM_LEVEL tăng dần
        List<CleverseApprovalSignerDto> affirmList = mapper.selectAffirmListByApplyNo(params);
        if (affirmList == null || affirmList.isEmpty()) {
            return;
        }

        // Báo bảo vệ 1 lần/đơn khi cấp 2 còn chờ duyệt và đơn nghỉ bắt đầu sau giờ vào ca
        if ("1".equals(apply.getTimeFlag())
                && affirmList.stream().anyMatch(a -> "2".equals(safe(a.getAffirmLevel())))) {
            sendAttendanceEmail(applyNo);
            mapper.updateAttendanceFlag(params);
        }

        txTemplate.executeWithoutResult(status -> {
            for (CleverseApprovalSignerDto affirm : affirmList) {
                if (!"1".equals(safe(affirm.getAffirmType()))) {
                    continue;
                }
                SignerInfo signer = findSigner(affirm, signerInfos);
                // Không tìm thấy hoặc người duyệt chưa xử lý (status 0) trên Cleverse
                if (signer == null || signer.getStatus() == 0) {
                    continue;
                }
                Map<String, Object> execParams = new HashMap<>();
                execParams.put("applyNo", applyNo);
                execParams.put("applyType", safe(affirm.getApplyType()));
                execParams.put("applyFlag", safe(affirm.getApplyFlag()));
                execParams.put("flag", signer.getStatus());
                execParams.put("affirmContent", safe(signer.getComment()));
                execParams.put("adminID", "");
                execParams.put("adminIP", syncAdminIp);
                execParams.put("affirmLevel", safe(affirm.getAffirmLevel()));
                execParams.put("message", "");
                affirmEmailMapper.callAffirmExecute(execParams);
                log.info("[Cleverse-Sync] applyNo={}, affirmLevel={}, affirmFlag={}, message={}",
                        applyNo, affirm.getAffirmLevel(), signer.getStatus(), execParams.get("message"));
            }
        });
    }

    /**
     * Tìm signer trên Cleverse tương ứng với 1 dòng duyệt trong HR (port findSigner bản gốc).
     * Ưu tiên khớp email; chỉ fallback theo sequence (AFFIRM_LEVEL) khi sequence đó là duy nhất
     * (tránh nhầm khi duyệt song song).
     */
    private SignerInfo findSigner(CleverseApprovalSignerDto affirm, SignerInfo[] signerInfos) {
        String email = safe(affirm.getEmail()).trim();
        if (!email.isEmpty()) {
            for (SignerInfo signer : signerInfos) {
                if (signer != null && email.equalsIgnoreCase(safe(signer.getEmailAddr()).trim())) {
                    return signer;
                }
            }
        }
        String level = safe(affirm.getAffirmLevel());
        SignerInfo matched = null;
        for (SignerInfo signer : signerInfos) {
            if (signer != null && level.equals(String.valueOf(signer.getSequence()))) {
                if (matched != null) {
                    return null; // nhiều signer cùng sequence -> không xác định được
                }
                matched = signer;
            }
        }
        return matched;
    }

    /** Port SendEmailSerImpl.sendAttendanceEmail + MailManager.sendMailWebService: báo bảo vệ về đơn nghỉ. */
    private void sendAttendanceEmail(String applyNo) {
        Map<String, Object> params = new HashMap<>();
        params.put("applyNo", applyNo);
        List<CleverseApprovalApplyDto> leaveList = mapper.selectApplyLeaveData(params);
        if (leaveList == null || leaveList.isEmpty()) {
            return;
        }
        for (CleverseApprovalApplyDto leave : leaveList) {
            String personInfo = "<tr>" + td(leave.getLocalName()) + td(leave.getEmpId())
                    + td(leave.getDeptName()) + td(leave.getPositionName()) + "</tr>";
            String attInfo = "<tr>" + td(safe(leave.getApplyTypeNameKo()) + " / " + safe(leave.getApplyTypeNameVi()))
                    + td(leave.getFromTime()) + td(leave.getToTime())
                    + td(leave.getApplyLength()) + td(leave.getRemark()) + "</tr>";
            String content = getTemplate()
                    .replace("[APPLY_PERSON_INFO]", personInfo)
                    .replace("[APPAL_ATT_INFO]", attInfo);
            sendMail("Thông báo xin nghỉ phép", content, securityEmail);
        }
    }

    private void sendMail(String title, String content, String address) {
        if (!"1".equals(mailSendFlag)) {
            log.info("[Cleverse-Mail] skipped (mail send-flag={}), to={}, title={}", mailSendFlag, address, title);
            return;
        }
        try {
            WsMailInfo mailInfo = new WsMailInfo();
            mailInfo.setSubject(title);
            mailInfo.setSenderEmail(mailFrom);
            mailInfo.setHtmlContent(true);
            mailInfo.setMhtContent(false);
            mailInfo.setImportant(false);
            mailInfo.setAttachCount(0);

            WsRecipient receiver = new WsRecipient();
            receiver.setSeqID(1);
            receiver.setRecvType("TO");
            receiver.setRecvEmail(address);
            receiver.setDept(false);

            MailServiceProxy mailProxy = new MailServiceProxy(mailEndpoint);
            String result = mailProxy.sendMISMail(content, mailInfo, new WsRecipient[] { receiver }, new WsAttachFile[0]);
            log.info("[Cleverse-Mail] Sent to={}, title={}, result={}", address, title, result);
        } catch (Exception e) {
            log.error("[Cleverse-Mail] sendMISMail error, to={}{}", address, describeWsError(e), e);
        }
    }

    private boolean checkOrgConnection(NeoOrgWsProxy orgProxy) {
        try {
            OrgUserVO[] users = orgProxy.searchUserByEmpolyeeNo(healthCheckEmpId);
            // Chỉ cần WS phản hồi được; empId kiểm tra có thể không tồn tại trên Cleverse DEV (type=517)
            if (users == null || users.length == 0) {
                log.warn("[Cleverse] NeoOrgWs health check returned no user for empId={}", healthCheckEmpId);
            }
            return true;
        } catch (Exception e) {
            log.error("[Cleverse] NeoOrgWs unreachable ({}), skip sending{}", orgEndpoint, describeWsError(e), e);
            return false;
        }
    }

    private boolean sendOneApply(NeoOrgWsProxy orgProxy, CleverseApprovalApplyDto apply,
                                 Map<String, String> userKeyCache) {
        String applyNo = apply.getApplyNo();
        if (isBlank(apply.getMisDocId())) {
            log.warn("[Cleverse] applyNo={} has no MISDOCID, skip", applyNo);
            return false;
        }

        Map<String, Object> params = new HashMap<>();
        params.put("applyNo", applyNo);
        List<CleverseApprovalSignerDto> affirmList = nullToEmpty(mapper.selectAffirmListByApplyNo(params));
        List<CleverseApprovalSignerDto> receiverList = nullToEmpty(mapper.selectReceiverListByApplyNo(params));
        fillUserKeys(orgProxy, affirmList, userKeyCache);
        fillUserKeys(orgProxy, receiverList, userKeyCache);

        String title = safe(apply.getApplyTypeName()) + " Application(" + safe(apply.getLocalName())
                + ")[Date: " + safe(apply.getApplyTime()) + "]";
        String content = buildContent(apply);

        boolean sent = submitApproval(title, content, apply.getMisDocId(), affirmList, receiverList);
        if (sent) {
            updateApplySendFlag(params);
            log.info("[Cleverse] Sent applyNo={}, misDocId={}", applyNo, apply.getMisDocId());
        }
        return sent;
    }

    /** Lấy userKey Cleverse theo mã NV (bản gốc gọi WS cho từng người; ở đây cache trong 1 lần chạy). */
    private void fillUserKeys(NeoOrgWsProxy orgProxy, List<CleverseApprovalSignerDto> signers,
                              Map<String, String> userKeyCache) {
        if (signers == null) {
            return;
        }
        for (CleverseApprovalSignerDto signer : signers) {
            String empId = signer.getAffirmEmpId();
            if (isBlank(empId)) {
                continue;
            }
            if (!userKeyCache.containsKey(empId)) {
                String userKey = null;
                try {
                    OrgUserVO[] users = orgProxy.searchUserByEmpolyeeNo(empId);
                    if (users != null && users.length > 0) {
                        userKey = users[0].getUserKey();
                    } else {
                        log.warn("[Cleverse] No Cleverse user for empId={}", empId);
                    }
                } catch (Exception e) {
                    log.error("[Cleverse] searchUserByEmpolyeeNo error, empId={}{}", empId, describeWsError(e), e);
                }
                userKeyCache.put(empId, userKey);
            }
            signer.setUserKey(userKeyCache.get(empId));
        }
    }

    /** Port MailSendApprovalManager.sendApproval (không gửi file đính kèm - bản gốc cũng truyền list rỗng). */
    private boolean submitApproval(String title, String content, String misDocId,
                                   List<CleverseApprovalSignerDto> approverList,
                                   List<CleverseApprovalSignerDto> receiverList) {
        try {
            ApprovalDocument doc = new ApprovalDocument();
            doc.setTitle(title);
            doc.setBodyContent(content);
            doc.setBodyContentType(1);                 // 1: html
            doc.setMisDocId(misDocIdPrefix + misDocId);
            doc.setSystemId(systemId);
            doc.setCompanyId(companyId);
            if (!isBlank(formCode)) {
                doc.setFormCode(formCode);
            }
            doc.setFlowCase("customized");             // customized: bắt buộc truyền signerInfos

            int approverSize = approverList.size();
            SignerInfo[] signerInfos = new SignerInfo[approverSize];
            for (int i = 0; i < approverSize; i++) {
                CleverseApprovalSignerDto approver = approverList.get(i);
                SignerInfo signer = new SignerInfo();
                signer.setAssignType(parseInt(approver.getAssignType()));  // 0: 기안, 1: 결재
                signer.setSequence(parseInt(approver.getAffirmLevel()));
                signer.setUserkey(approver.getUserKey());
                signer.setUserId("");
                signer.setDelegeted(false);
                signer.setNotRemovable(true);
                signer.setNotEditable(true);
                signerInfos[i] = signer;
            }

            int receiverSize = receiverList.size();
            ReceiverInfo[] receiverInfos = new ReceiverInfo[receiverSize];
            for (int i = 0; i < receiverSize; i++) {
                CleverseApprovalSignerDto receiver = receiverList.get(i);
                ReceiverInfo info = new ReceiverInfo();
                info.setRoleType(receiver.getReceiverType());               // referer / receiver
                info.setReceiverKey(receiver.getUserKey());
                info.setReceiverId("");
                receiverInfos[i] = info;
            }

            doc.setSignerInfos(signerInfos);
            doc.setReceiverInfos(receiverInfos);
            doc.setAttachfiles(new WsApAttachFile[0]);

            ApprovalServiceProxy proxy = new ApprovalServiceProxy(approvalEndpoint);
            String message = proxy.submitApproval(doc);
            log.info("[Cleverse] submitApproval misDocId={} response={}", misDocId, message);
            return true;
        } catch (Exception e) {
            log.error("[Cleverse] submitApproval error, misDocId={}{}\n  request: endpoint={}, systemId={}, companyId={},"
                            + " formCode={}, flowCase=customized, title={}\n  signers: {}\n  receivers: {}",
                    misDocIdPrefix + misDocId, describeWsError(e), approvalEndpoint, systemId, companyId, formCode,
                    title, describeSigners(approverList), describeSigners(receiverList), e);
            return false;
        }
    }

    /**
     * Trích thông tin lỗi SOAP: WsException (exceptionCode/Message/Actor do Cleverse trả về) và
     * AxisFault (faultCode/faultString) - toString() mặc định của 2 class này không in các trường đó.
     */
    private static String describeWsError(Exception e) {
        StringBuilder sb = new StringBuilder();
        if (e instanceof WsException) {
            WsException ws = (WsException) e;
            sb.append("\n  WsException: code=").append(ws.getExceptionCode())
              .append(", message=").append(ws.getExceptionMessage())
              .append(", actor=").append(ws.getExceptionActor());
        }
        if (e instanceof AxisFault) {
            AxisFault fault = (AxisFault) e;
            sb.append("\n  AxisFault: faultCode=").append(fault.getFaultCode())
              .append(", faultString=").append(fault.getFaultString());
            if (fault.getFaultReason() != null && !fault.getFaultReason().equals(fault.getFaultString())) {
                sb.append(", faultReason=").append(fault.getFaultReason());
            }
            Throwable cause = fault.detail;
            if (cause != null) {
                sb.append(", cause=").append(cause);
            }
        } else if (e.getMessage() != null) {
            sb.append("\n  message=").append(e.getMessage());
        }
        return sb.toString();
    }

    /** Tóm tắt người duyệt/nhận gửi sang Cleverse - userKey=null nghĩa là không tra được user trên Cleverse. */
    private static String describeSigners(List<CleverseApprovalSignerDto> signers) {
        if (signers == null || signers.isEmpty()) {
            return "[]";
        }
        StringBuilder sb = new StringBuilder("[");
        for (CleverseApprovalSignerDto s : signers) {
            if (sb.length() > 1) {
                sb.append("; ");
            }
            sb.append("empId=").append(s.getAffirmEmpId())
              .append(", level=").append(s.getAffirmLevel())
              .append(s.getAssignType() != null ? ", assignType=" + s.getAssignType() : "")
              .append(s.getReceiverType() != null ? ", roleType=" + s.getReceiverType() : "")
              .append(", userKey=").append(s.getUserKey());
        }
        return sb.append("]").toString();
    }

    /** Port updateApplySendFlag: APPLY_NO duy nhất giữa các bảng nên update cả 5 bảng. */
    private void updateApplySendFlag(Map<String, Object> params) {
        try {
            mapper.updateAttApplySendFlag(params);
            mapper.updateOtApplySendFlag(params);
            mapper.updateOtOverApplySendFlag(params);
            mapper.updateCardApplySendFlag(params);
            mapper.updateTrainApplySendFlag(params);
        } catch (Exception e) {
            log.error("[Cleverse] updateApplySendFlag error, applyNo={}", params.get("applyNo"), e);
        }
    }

    /** Dựng nội dung HTML từ template approvalInfo.htm - giữ đúng cấu trúc bảng bản gốc. */
    private String buildContent(CleverseApprovalApplyDto apply) {
        StringBuilder personInfo = new StringBuilder();
        personInfo.append("<tr>")
                .append(td(apply.getLocalName()))
                .append(td(apply.getEmpId()))
                .append(td(apply.getDeptName()))
                .append(td(apply.getPositionName()))
                .append("</tr>");

        String applyTypeNo = safe(apply.getApplyTypeNo());
        String typeName = safe(apply.getApplyTypeNameKo()) + " / " + safe(apply.getApplyTypeNameVi());
        if (OT_OVER_APPLY_TYPE_NO.equals(applyTypeNo)) {
            typeName = " (OT Over) " + typeName;
        }
        String length = LEAVE_APPLY_TYPE_NO.equals(applyTypeNo)
                ? safe(apply.getAttLength())
                : safe(apply.getOtLength()) + "(Total overtime in month: " + safe(apply.getOtTotalMonth()) + ")";

        StringBuilder attInfo = new StringBuilder();
        attInfo.append("<tr>")
                .append(td(typeName))
                .append(td(apply.getFromTime()))
                .append(td(apply.getToTime()))
                .append(td(length))
                .append(td(apply.getRemark()))
                .append("</tr>");

        return getTemplate()
                .replace("[APPLY_PERSON_INFO]", personInfo.toString())
                .replace("[APPAL_ATT_INFO]", attInfo.toString());
    }

    private String td(String value) {
        return "<td class=\"td_type\" style=\"text-align: center\">" + HtmlUtils.htmlEscape(safe(value)) + "</td>";
    }

    private String getTemplate() {
        if (template == null) {
            synchronized (this) {
                if (template == null) {
                    try (InputStream in = new ClassPathResource(TEMPLATE_PATH).getInputStream()) {
                        template = new String(in.readAllBytes(), StandardCharsets.UTF_8);
                    } catch (IOException e) {
                        log.error("[Cleverse] Cannot read template {}", TEMPLATE_PATH, e);
                        return "<table>[APPLY_PERSON_INFO]</table><br/><table>[APPAL_ATT_INFO]</table>";
                    }
                }
            }
        }
        return template;
    }

    private static <T> List<T> nullToEmpty(List<T> list) {
        return list == null ? Collections.emptyList() : list;
    }

    private static int parseInt(String value) {
        try {
            return Integer.parseInt(safe(value).trim());
        } catch (NumberFormatException e) {
            return 0;
        }
    }

    private static String safe(String value) {
        return value == null ? "" : value;
    }

    private static boolean isBlank(String value) {
        return value == null || value.trim().isEmpty();
    }
}
