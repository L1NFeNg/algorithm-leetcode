function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function (head) {
  if (!head) return head;
  let dummyHead = head;
  while ( head.next ) {
    if (head.next.val === head.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }
  return dummyHead;
};