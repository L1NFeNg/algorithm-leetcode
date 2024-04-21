// 对称二叉树

// 给你一个二叉树的根节点 root ， 检查它是否轴对称。


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isSymmetric = function (root) {
  let currentLayerNodes = [];
  currentLayerNodes.push(root);
  while ( currentLayerNodes.filter(node => node !== null).length > 0 ) {
    let currentLayerNodeValues = currentLayerNodes.map(node => node !== null ? node.val : null);
    if (isPalindrome(currentLayerNodeValues)) {
      let nextLayerNodes = [];
      currentLayerNodes.forEach(node => {
        if (node) {
          nextLayerNodes.push(node.left);
          nextLayerNodes.push(node.right);
        }
      });
      currentLayerNodes = nextLayerNodes;
    } else {
      return false;
    }
  }
  return true;
};

function isPalindrome(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if (array[left] !== array[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}