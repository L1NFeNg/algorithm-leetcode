function isSymmetric(root) {
  // 辅助函数：检查两个节点是否镜像对称
  function isMirror(node1, node2) {
    // 如果两个节点都为空，则是对称的
    if (!node1 && !node2) return true;
    // 如果只有一个节点为空，则不对称
    if (!node1 || !node2) return false;
    // 递归检查左右子树是否镜像对称
    return (node1.val === node2.val) &&
      isMirror(node1.left, node2.right) &&
      isMirror(node1.right, node2.left);
  }

  // 如果根节点为空，则是对称的
  if (!root) return true;
  // 调用辅助函数检查左右子树是否镜像对称
  return isMirror(root.left, root.right);
}