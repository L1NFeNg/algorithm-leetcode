function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let inorderTraversal = function (root) {
  const result = []; // 存放遍历结果的数组
  const stack = []; //辅助栈
  let current = root; // 当前节点

  // 当前节点不为空或栈不为空时执行循环
  while ( current !== null || stack.length > 0 ) {
    // 将当前节点及其左子树入栈
    while ( current !== null ) {
      stack.push(current);  // 当前节点入栈
      current = current.left; // 移动到左子节点
    }

    // 弹出栈顶节点并将其值加入结果数组
    current = stack.pop(); // 弹出栈顶节点
    result.push(current.val); // 将节点值加入结果数组

    // 处理右子树
    current = current.right;
  }
  return result;
};