function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

// 从中序遍历中得到的启发，这显然不是很好的方法，也没有通过所有的测试用例
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
let isSameTree = function (p, q) {
  if (!judge(p, q)) return false;
  let currentP = p;
  let currentQ = q;
  let stackP = [];
  let stackQ = [];
  while ( currentP !== null || currentQ !== null ) {
    if (!judge(currentP, currentQ)) return false;
    while ( currentP !== null && currentQ !== null ) {
      stackP.push(currentP);
      stackQ.push(currentQ);
      currentP = currentP.left;
      currentQ = currentQ.left;
      if (!judge(currentP, currentQ)) return false;
    }
    currentP = stackP.pop();
    currentQ = stackQ.pop();
    if (!judge(currentP, currentQ)) return false;
    currentP = currentP.right;
    currentQ = currentQ.right;
    if (!judge(currentP, currentQ)) return false;
  }
  return judge(currentP, currentQ);
};

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
let judge = function (p, q) {
  if (p && !q) return false;
  if (!p && q) return false;
  if (p && q) {
    if (p.val !== q.val) return false;
    if (p.left && !q.left) return false;
    if (!p.left && q.left) return false;
    if (p.right && !q.right) return false;
    if (!p.right && q.right) return false;
  }
  return true;
};