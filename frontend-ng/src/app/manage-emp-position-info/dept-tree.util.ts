import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { AuthDeptNode } from './manage-emp-position-info.model';

export interface DeptTreeResult {
  nodes: NzTreeNodeOptions[];
  /** id -> danh sách id con trực tiếp - dùng cho expandDeptSelection(). */
  childrenMap: Map<string, string[]>;
}

/** Dựng cây nz-tree-select từ danh sách phẳng authorized-departments (id/text/parent). Dùng chung cho
 *  ManageEmpPositionInfoComponent và ViewDeptPersonalInfoComponent. */
export function buildDeptTree(list: AuthDeptNode[]): DeptTreeResult {
  const map = new Map<string, NzTreeNodeOptions & { parent: string }>();
  list.forEach((d) => map.set(d.id, { title: d.text, key: d.id, parent: d.parent, children: [] }));

  const childrenMap = new Map<string, string[]>();
  const roots: NzTreeNodeOptions[] = [];
  map.forEach((node) => {
    if (node.parent && node.parent !== '0' && map.has(node.parent)) {
      map.get(node.parent)!.children!.push(node);
      const siblings = childrenMap.get(node.parent) ?? [];
      siblings.push(node.key);
      childrenMap.set(node.parent, siblings);
    } else {
      roots.push(node);
    }
  });

  const markLeaf = (nodes: NzTreeNodeOptions[]) => {
    nodes.forEach((n) => {
      n.isLeaf = !n.children || n.children.length === 0;
      if (n.children?.length) markLeaf(n.children);
    });
  };
  markLeaf(roots);
  return { nodes: roots, childrenMap };
}

/** nz-tree-select chỉ trả về key của node được tick trực tiếp - KHÔNG tự cascade xuống phòng ban
 *  con như widget DeptTree.js gốc (hàm checkChildren() đệ quy). Backend lọc theo deptNos IN (...)
 *  đúng từng mã, nên nếu không mở rộng thủ công ở đây, chọn 1 phòng ban cha (VD "HTSV") sẽ chỉ lọc
 *  đúng nhân viên gán trực tiếp vào phòng đó, bỏ sót toàn bộ nhân viên ở các phòng ban con - khiến
 *  kết quả tra cứu trống hoặc thiếu dữ liệu. */
export function expandDeptSelection(selected: string[], childrenMap: Map<string, string[]>): string[] {
  const result = new Set<string>();
  const stack = [...selected];
  while (stack.length) {
    const id = stack.pop()!;
    if (result.has(id)) continue;
    result.add(id);
    const children = childrenMap.get(id);
    if (children) stack.push(...children);
  }
  return Array.from(result);
}
