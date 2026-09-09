// src/app/view-compose-org/org-info-tree.util.ts
function buildOrgTree(list) {
  const idSet = new Set(list.map((o) => o.deptNo));
  const nodeMap = /* @__PURE__ */ new Map();
  list.forEach((item) => {
    nodeMap.set(item.deptNo, {
      key: item.deptNo,
      title: item.orgNameLocal || item.orgNameEng || item.deptNo,
      icon: "bx bxs-folder",
      isLeaf: true,
      data: item
    });
  });
  const roots = [];
  list.forEach((item) => {
    const node = nodeMap.get(item.deptNo);
    const parentId = item.parentDeptNo;
    const parentNode = parentId && parentId !== "ROOT" && idSet.has(parentId) ? nodeMap.get(parentId) : void 0;
    if (parentNode) {
      parentNode.isLeaf = false;
      (parentNode.children ??= []).push(node);
    } else {
      roots.push(node);
    }
  });
  return roots;
}
function collectAllKeys(nodes) {
  const keys = [];
  const walk = (list) => {
    list.forEach((n) => {
      keys.push(n.key);
      if (n.children?.length) walk(n.children);
    });
  };
  walk(nodes);
  return keys;
}

export {
  buildOrgTree,
  collectAllKeys
};
//# debugId=383da4ff-14a8-57b9-8fd4-4f3960d90e85
//# sourceMappingURL=chunk-OSMPNKLW.js.map
