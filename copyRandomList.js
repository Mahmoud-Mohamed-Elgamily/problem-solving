var copyRandomList = function (head) {
  let pre = new Node(-1);
  let temppre = pre;
  let curorigin = head;

  let map = new Map();
  while (curorigin != null) {
    temppre.next = new Node(curorigin.val);

    map.set(curorigin, temppre.next);
    curorigin = curorigin.next;
    temppre = temppre.next;
  }
  curorigin = head;
  // while(curorigin!=null){

  //     console.log(curorigin.random);
  //      curorigin=curorigin.next;

  // }
  let temp = pre.next;
  while (temp != null) {
    temp.random = map.get(curorigin.random);
    curorigin = curorigin.next;
    temp = temp.next;
  }

  return pre.next;
};
