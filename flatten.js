/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

const recursiveFn = (head) => {
    let curr = head;
    do {
      if (curr?.child) {
        let next = curr.next;
        const [newNext, newCurr] = recursiveFn(curr.child);
        curr.child = null;
        [newNext.prev, curr.next] = [curr, newNext];
        curr = newCurr;
        if(next)
        [curr.next, next.prev] = [next, curr];
      } else curr = curr?.next || curr;
    }
    while (curr?.next) 
    return [head, curr];
  };
  
  var flatten = function (head) {
    const [result] = recursiveFn(head);
    return result;
  };
  