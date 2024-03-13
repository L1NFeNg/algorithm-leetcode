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
let carryFlag = false;
let addTwoNumbers = function (l1, l2) {
  let node = new ListNode();
  // 是否进位标记
  node.val = l1.val + l2.val + Number(carryFlag);
  // 大于等于10，取余数，打进位标记
  if (node.val >= 10) {
    node.val = node.val % 10;
    carryFlag = true;
  }
  // console.log("carryFlag", carryFlag);
  // console.log("node.val", node.val);

  // 结束了
  if (l1.next === null && l2.next === null && carryFlag) {
    node.next = new ListNode();
    node.next.val = 1;
    node.next.next = null;
    carryFlag = false;
  }

  // 结束了
  if (l1.next === null && l2.next === null && !carryFlag) {
    node.next = null;
  }

  if (l1.next === null && l2.next !== null) {
    l2.next.val += carryFlag;
    node.next = l2.next;
  }

  if (l1.next !== null && l2.next === null) {
    l1.next.val += carryFlag;
    node.next = l1.next;
  }

  if (l1.next !== null && l2.next !== null) {
    node.next = addTwoNumbers(l1.next, l2.next);
  }
  return node;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

//
// l1 = new ListNode();
// l1.val = 0;
// l1.next = null;
//
// l2 = new ListNode();
// l2.val = 0;
// l2.next = null;
//
// console.log(addTwoNumbers(l1, l2));