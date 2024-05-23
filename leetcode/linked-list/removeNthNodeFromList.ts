class ListNode {
  val: number;
  next: ListNode;
  constructor(val: number, next: ListNode) {
    this.val = val;
    this.next = next;
  }
}

let list = new ListNode();
list.val = 1;
list.next = new ListNode();
list.next.val = 2;
list.next.next = new ListNode();
list.next.next.val = 3;
list.next.next.next = new ListNode();
list.next.next.next.val = 4;
list.next.next.next.next = new ListNode();
list.next.next.next.next.val = 5;
