import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { OrgInfoDto } from './view-compose-org.model';

/** Node cây tổ chức - gắn thêm bản ghi OrgInfoDto gốc vào field "data" (NzTreeNodeOptions cho phép field
 *  tự do qua index signature) để đọc lại khi click chọn node, giống hệt cách jsTree bản gốc gắn
 *  "data: item" cho mỗi node. Dùng chung cho view-compose-org và view-history-org-info (cùng nguồn dữ
 *  liệu OrgInfoDto từ OrgComposeController#getOrgStructure). */
export interface OrgTreeNodeOptions extends NzTreeNodeOptions {
  data: OrgInfoDto;
  children?: OrgTreeNodeOptions[];
}

/** Dựng cây thật (parent/child theo deptNo/parentDeptNo) từ danh sách phẳng OrgInfoDto - đúng logic
 *  buildTree() bản gốc (viewComposeOrg.html/viewHistoryOrgInfo.html): phòng ban có parentDeptNo rỗng,
 *  "ROOT" hoặc trỏ tới 1 deptNo không tồn tại trong danh sách (orphan) đều được coi là node gốc để tránh
 *  mất dữ liệu. */
export function buildOrgTree(list: OrgInfoDto[]): OrgTreeNodeOptions[] {
  const idSet = new Set(list.map((o) => o.deptNo));
  const nodeMap = new Map<string, OrgTreeNodeOptions>();
  list.forEach((item) => {
    nodeMap.set(item.deptNo, {
      key: item.deptNo,
      title: item.orgNameLocal || item.orgNameEng || item.deptNo,
      icon: 'bx bxs-folder',
      isLeaf: true,
      data: item,
    });
  });

  const roots: OrgTreeNodeOptions[] = [];
  list.forEach((item) => {
    const node = nodeMap.get(item.deptNo)!;
    const parentId = item.parentDeptNo;
    const parentNode = parentId && parentId !== 'ROOT' && idSet.has(parentId) ? nodeMap.get(parentId) : undefined;
    if (parentNode) {
      parentNode.isLeaf = false;
      (parentNode.children ??= []).push(node);
    } else {
      roots.push(node);
    }
  });
  return roots;
}

/** Thu thập toàn bộ key trong cây - dùng để "Mở tất cả" (set nzExpandedKeys = mọi key). */
export function collectAllKeys(nodes: OrgTreeNodeOptions[]): string[] {
  const keys: string[] = [];
  const walk = (list: OrgTreeNodeOptions[]) => {
    list.forEach((n) => {
      keys.push(n.key);
      if (n.children?.length) walk(n.children);
    });
  };
  walk(nodes);
  return keys;
}
