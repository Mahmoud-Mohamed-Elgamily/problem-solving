function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseList = function (head) {
  let currNode = head;
  let nextNode = head.next;

  while (nextNode) {
    const next = nextNode.next;
    nextNode.next = currNode;
    currNode = nextNode;
    nextNode = next;
  }
  return currNode;
};

console.log(
  reverseList(
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    )
  )
);
