class MyLinkedList {
  constructor() {
    this.head;
  }
  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (index == 0) return this.head ? this.head.val : -1;
    let i = 0;
    let current = this.head;
    while (i < index - 1) {
      current = current.next ? current.next : current;
      i++;
    }
    return current.next ? current.next.val : -1;
  }
  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    if (this.head) {
      let current = { val, next: { ...this.head } };
      this.head = current;
    } else {
      this.head = { val };
    }
  };
}
var MyLinkedList = function () {};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (!this.head) return this.addAtHead(val);
  let current = this.head;
  while (current.next) {
    current = current.next;
  }
  current.next = { val };
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index == 0) return this.addAtHead(val);
  let i = 0;
  let current = this.head || {};
  while (i < index - 1) {
    current = current.next ? current.next : current;
    i++;
  }
  if (current?.next) current.next = { val, next: current.next };
  else {
    current.next = { val };
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index == 0) {
    this.head = this.head.next;
    return;
  }
  let i = 0;
  let current = this.head;
  while (i < index - 1) {
    current = current.next ? current.next : current;
    i++;
  }
  if (current.next?.next) current.next = current.next.next;
  else {
    current.next = undefined;
  }
};
