package com.ait.cleverse.service.impl;

import com.ait.cleverse.dto.CleverseApprovalApplyDto;
import com.ait.cleverse.dto.CleverseApprovalSignerDto;
import com.ait.cleverse.mapper.CleverseApprovalMapper;
import com.ait.cleverse.service.CleverseApprovalService;
import com.ait.cleverse.util.TLS12SocketFactory;
import hanwha.neo.branch.ss.approval.axisws.ApprovalServiceProxy;
import hanwha.neo.branch.ss.approval.vo.ApprovalDocument;
import hanwha.neo.branch.ss.approval.vo.ReceiverInfo;
import hanwha.neo.branch.ss.approval.vo.SignerInfo;
import hanwha.neo.branch.ss.approval.vo.WsApAttachFile;
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
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
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
 * Port từ Hanwha_HAE: MailSendApprovalManager.sendAffirmInfoEmailApproval / sendApproval
 * và SendEmailSerImpl.getAffirmInfoEmailApproval.
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

    @Value("${cleverse.approval.system-id:HAE_VHR}")
    private String systemId;

    @Value("${cleverse.approval.company-id:D11}")
    private String companyId;

    @Value("${cleverse.approval.mis-doc-id-prefix:HAEVHR_001_}")
    private String misDocIdPrefix;

    /** Mã NV dùng để kiểm tra kết nối NeoOrgWs trước khi gửi (bản gốc hardcode 20100196) */
    @Value("${cleverse.approval.health-check-empid:20100196}")
    private String healthCheckEmpId;

    @Value("${cleverse.approval.trust-all:true}")
    private boolean trustAll;

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

    private boolean checkOrgConnection(NeoOrgWsProxy orgProxy) {
        try {
            OrgUserVO[] users = orgProxy.searchUserByEmpolyeeNo(healthCheckEmpId);
            if (users == null || users.length == 0) {
                log.warn("[Cleverse] NeoOrgWs health check returned no user for empId={}, skip sending", healthCheckEmpId);
                return false;
            }
            return true;
        } catch (Exception e) {
            log.error("[Cleverse] NeoOrgWs unreachable ({}), skip sending", orgEndpoint, e);
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
                    log.error("[Cleverse] searchUserByEmpolyeeNo error, empId={}", empId, e);
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
            log.debug("[Cleverse] submitApproval misDocId={} response={}", misDocId, message);
            return true;
        } catch (Exception e) {
            log.error("[Cleverse] submitApproval error, misDocId={}", misDocId, e);
            return false;
        }
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
