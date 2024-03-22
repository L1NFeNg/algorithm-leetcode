class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  // 定义一个虚拟头节点，简化链表操作
  const dummyHead = new ListNode();
  let current = dummyHead;
  let carry = 0; // 进位

  // 遍历两个链表直至其中一个为空
  while ( l1 !== null || l2 !== null ) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;

    // 更新进位
    carry = Math.floor(sum / 10);
    // 创建新节点存储当前位的数字
    current.next = new ListNode(sum % 10);
    current = current.next;

    // 移动到下一个节点
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  // 处理最高位的进位
  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  // 返回虚拟头节点的下一个节点，即相加后的链表的头节点
  return dummyHead.next;
}
