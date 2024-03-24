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
  let result = [];
  if (root?.left) {
    result = result.concat(inorderTraversal(root.left));
  }
  if (root) {
    result.push(root.val);
  }
  if (root?.right) {
    result = result.concat(inorderTraversal(root.right));
  }
  return result;
};