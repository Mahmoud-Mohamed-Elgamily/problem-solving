/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1?
 * @param {ListNode} l2?
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (!l1 && !l2) return null;

  let carry = 0;
  let res = new ListNode();
  let current = res;

  while (l1 || l2 || carry > 0) {
    let val = l1?.val + l2?.val + carry;
    carry = val > 10 ? Math.floor(val % 10) : 0;
    current.next = new ListNode(val % 10);
    current = current.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }

  return res;
};