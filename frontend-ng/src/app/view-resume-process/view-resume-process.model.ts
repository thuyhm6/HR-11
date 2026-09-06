/** Payload gửi lên POST /org/api/process/execute - đúng field mà OrgResumeInfoController#executeProcess
 *  đọc (resumeNo, types - thứ tự copyOrg -> scfl -> sczz -> qdzz do OrgResumeInfoServiceImpl tự sắp xếp
 *  lại, gửi lên theo thứ tự nào cũng được). */
export interface ProcessExecutePayload {
  resumeNo: string;
  types: string[];
}
