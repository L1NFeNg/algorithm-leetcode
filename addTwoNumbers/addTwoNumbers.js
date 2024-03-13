//给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
//
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
//
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function (l1, l2) {
  let node = new ListNode();
  // 是否进位标记
  let carryFlag = false;
  node.val = l1.val + l2.val;
  // 大于等于10，取余数，打进位标记
  if (node.val >= 10) {
    node.val %= node.val;
    carryFlag = true;
  }

  // l1 没了 ，l2 还有
  if (l1.next === null && l2.next !== null) {
    if (carryFlag === true) {
      l2.next.val++; // 这里又进位了怎么办？
    }
    node.next = l2.next;
    return node;
  }

  // l1 还有 ，l2 没了
  if (l1.next !== null && l2.next === null) {
    if (carryFlag === true) {
      l1.next.val++; // 这里又进位了怎么办？
    }
    node.next = l1.next;
    return node;
  }

  // l1 还有 ，l2 还有
  if (l1.next !== null && l2.next !== null) {
    node.next = addTwoNumbers(l1.next, l2.next);
    return node;
  }

  return node;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

