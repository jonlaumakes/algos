class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode) {
    this.val = val ? val : 0;
    this.next = next ? next : null;
  }
}
// INPUT
// 2 -> 4 -> 3
// 5 -> 6 -> 4

// OUTPUT
// 7 -> 0 -> 8

const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null,
  carry: number = 0
): ListNode => {
  if (!l1 && !l2 && !carry) return null;

  const sum = l1.val || 0 + l2.val || 0 + carry;
  const nodeVal = sum % 10;
  let nextCarry = Math.floor(sum / 10);

  return new ListNode(nodeVal, addTwoNumbers(l1.next, l2.next, nextCarry));
};
