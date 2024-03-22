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
  let val_1 = l1 ? l1.val : 0;
  let val_2 = l2 ? l2.val : 0;
  // 是否进位标记
  node.val = val_1 + val_2 + Number(carryFlag);
  // 大于等于10，取余数，打进位标记
  if (node.val >= 10) {
    node.val = node.val % 10;
    carryFlag = true;
  } else {
    carryFlag = false;
  }

  if (l1.next === null && l2.next === null && carryFlag) {
    node.next = new ListNode();
    node.next.val = 1;
    node.next.next = null;
    console.log("结束了1");
    console.log("node:", node);
  }

  if (l1.next === null && l2.next === null && !carryFlag) {
    node.next = null;
  }

  if (l1.next !== null || l2.next !== null) {
    if (l1.next === null && l2.next !== null) {
      l1.next = new ListNode();
    }
    if (l1.next !== null && l2.next === null) {
      l2.next = new ListNode();
    }
    node.next = addTwoNumbers(l1.next, l2.next);
  }

  return node;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

// let l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
// let l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));

let l1 = new ListNode(0);
let l2 = new ListNode(1);

let result = addTwoNumbers(l1, l2);

console.log("result:", result);