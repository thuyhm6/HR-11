import { hierarchy, tree } from 'd3-hierarchy';
import { OrgNodeDto } from './view-org-info.model';

/** Kích thước 1 card + khoảng cách giữa các card - dùng chung cho d3.tree().nodeSize() và CSS
 *  (.org-card-wrap) nên phải khớp với view-org-info.component.css. */
export const NODE_WIDTH = 220;
export const NODE_HEIGHT = 140;
export const H_GAP = 40;
export const V_GAP = 60;

/** id giả cho root ảo bọc nhiều cây gốc (treeData() có thể có nhiều root) - d3.hierarchy() chỉ nhận 1
 *  root duy nhất. Không bao giờ trùng với id thật (id thật là số/uuid từ DB). */
const SYNTHETIC_ROOT_ID = '__org_chart_root__';

export interface OrgLayoutNode {
  data: OrgNodeDto;
  x: number;
  y: number;
  hasChildren: boolean;
  collapsed: boolean;
}

export interface OrgLayoutLink {
  id: string;
  path: string;
}

export interface OrgChartLayout {
  nodes: OrgLayoutNode[];
  links: OrgLayoutLink[];
  width: number;
  height: number;
}

/** DEPT xếp trước EMP, cùng loại thì theo tên - lấy nguyên logic sort của OrgChartNodeComponent bản
 *  đệ quy CSS cũ (sortedChildren getter). */
function sortChildren(a: OrgNodeDto, b: OrgNodeDto): number {
  if (a.type !== b.type) return a.type === 'DEPT' ? -1 : 1;
  return (a.name || '').localeCompare(b.name || '');
}

function childrenAccessor(collapsedIds: Set<string>) {
  return (d: OrgNodeDto): OrgNodeDto[] | undefined => {
    if (d.id !== SYNTHETIC_ROOT_ID && collapsedIds.has(d.id)) return undefined;
    if (!d.children || d.children.length === 0) return undefined;
    return [...d.children].sort(sortChildren);
  };
}

/** Tính tọa độ hiển thị (top-left, để template dùng translate(x,y) trực tiếp) + path đường nối dạng
 *  elbow cho toàn bộ cây, dùng d3.hierarchy/d3.tree. Node đang bị collapse thì bị loại khỏi layout
 *  ngay từ bước dựng hierarchy (khác bản CSS cũ chỉ display:none nhưng vẫn chiếm layout). */
export function computeOrgChartLayout(roots: OrgNodeDto[], collapsedIds: Set<string>): OrgChartLayout {
  if (roots.length === 0) return { nodes: [], links: [], width: 0, height: 0 };

  const synthetic: OrgNodeDto = {
    id: SYNTHETIC_ROOT_ID, parentId: null, name: null, title: null, type: 'ROOT',
    code: null, managerName: null, managerId: null, imageUrl: null, level: -1, children: roots,
  };

  const root = hierarchy(synthetic, childrenAccessor(collapsedIds));
  tree<OrgNodeDto>().nodeSize([NODE_WIDTH + H_GAP, NODE_HEIGHT + V_GAP])(root);

  const visible = root.descendants().filter((d) => d.depth > 0);
  const minX = Math.min(...visible.map((d) => d.x! - NODE_WIDTH / 2));
  const minY = Math.min(...visible.map((d) => d.y! - NODE_HEIGHT / 2));

  const toLayoutX = (x: number): number => x - NODE_WIDTH / 2 - minX;
  const toLayoutY = (y: number): number => y - NODE_HEIGHT / 2 - minY;

  const nodes: OrgLayoutNode[] = visible.map((d) => ({
    data: d.data,
    x: toLayoutX(d.x!),
    y: toLayoutY(d.y!),
    hasChildren: !!d.data.children?.length,
    collapsed: collapsedIds.has(d.data.id),
  }));

  const links: OrgLayoutLink[] = root.links()
    .filter((l) => l.source.depth >= 1)
    .map((l) => {
      const sx = toLayoutX(l.source.x!) + NODE_WIDTH / 2;
      const sy = toLayoutY(l.source.y!) + NODE_HEIGHT;
      const tx = toLayoutX(l.target.x!) + NODE_WIDTH / 2;
      const ty = toLayoutY(l.target.y!);
      const midY = (sy + ty) / 2;
      return {
        id: `${l.source.data.id}->${l.target.data.id}`,
        path: `M${sx},${sy} V${midY} H${tx} V${ty}`,
      };
    });

  const width = Math.max(0, ...nodes.map((n) => n.x + NODE_WIDTH));
  const height = Math.max(0, ...nodes.map((n) => n.y + NODE_HEIGHT));

  return { nodes, links, width, height };
}
