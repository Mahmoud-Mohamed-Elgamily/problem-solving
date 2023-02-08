/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this?.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let first, second;
  if (list1?.val > list2?.val) {
    first = list2;
    second = list1;
  } else {
    first = list1;
    second = list2;
  }
  head = first;
  current = head;
  first = first?.next;
  while (first || second) {
    if (first) {
      if (first?.val > second?.val) {
        current.next = second;
        current = current?.next;
        second = second?.next;
      } else {
        current.next = first;
        current = current?.next;
        first = first?.next;
      }
    } else {
      if (current) {
        current.next = second;
        current = current?.next;
        second = second?.next;
      }
    }
  }

  return head;
};
