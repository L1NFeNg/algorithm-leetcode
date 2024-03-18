// 修改自己的代码，让它和GPT代码一致
let mergeTwoLists = function (list1, list2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  while ( list1 && list2 ) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  current.next = list1 || list2;
  return dummyHead.next;
};
