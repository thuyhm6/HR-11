/** Tương ứng với OrgBusinessRelation.java (com.ait.org.orgManage.model) - 1 nghiệp vụ (công việc) gắn
 *  với 1 phòng ban của 1 phiên bản thay đổi tổ chức. businessName/deptName là 2 field ảo (virtual)
 *  được map sẵn ở ResultMap trong mapper.xml, chỉ dùng để hiển thị. */
export interface OrgBusinessRelationDto {
  seq: string | null;
  resumeNo: string | null;
  deptNo: string | null;
  codeNo: string;
  isDefault: string | null;
  orderNo: number | null;
  updatedBy: string | null;
  updateDate: string | null;
  businessName: string | null;
  deptName: string | null;
}
