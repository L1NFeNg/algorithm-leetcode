function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}


let mergeTwoLists = function (list1, list2) {
  let dummyHeadNode = new ListNode(0);
  let current = dummyHeadNode;
  while ( list1 !== null || list2 !== null ) {
    if (list1 === null) {
      current.next = list2;
      break;
    }
    if (list2 === null) {
      current.next = list1;
      break;
    }
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  return dummyHeadNode.next;
};

mergeTwoLists();