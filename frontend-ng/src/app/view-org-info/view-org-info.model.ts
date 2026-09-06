/** Tương ứng với OrgNode.java (com.ait.org.orgManage.dto) - 1 node trong sơ đồ tổ chức dạng cây (biểu
 *  đồ trực quan, khác cây danh sách của view-current-org-info): có thể là phòng ban ("DEPT") hoặc nhân
 *  viên ("EMP", node lá hiển thị compact). Backend trả về cây đã dựng sẵn quan hệ cha/con qua children,
 *  không cần dựng lại ở frontend như OrgInfoDto/HrDepartmentDto. */
export interface OrgNodeDto {
  id: string;
  parentId: string | null;
  name: string | null;
  title: string | null;
  type: string;
  code: string | null;
  managerName: string | null;
  managerId: string | null;
  imageUrl: string | null;
  level: number;
  children: OrgNodeDto[];
}
