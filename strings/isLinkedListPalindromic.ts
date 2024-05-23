class LlNode {
  value: string;
  next: LlNode | null;

  constructor(value: string, next: LlNode = null) {
    this.value = value;
    this.next = next;
  }
}

const isLLPalindromic = (list: LlNode): boolean => {
  const output: boolean = false;

  let fast = head;
  let slow = head;

  const hasCycle = (head: LlNode): boolean => {
    while (fast !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow === fast) return true;
    }

    return false;
  };

  let stringStack = "";
  const cycleExists = hasCycle(list);
  // if cycle exists, find the start of the cyle
  if (!cycleExists) {
    // iterate from head until end and store in a string
    // test for palindrome
    let start = head;
    while (start !== null) {
      stringStack = stringStack += start.value;
      start = start.next;
    }
  } else {
    // find the cycle length
    const cycleLength = findCycleLength(slow);
    console.log("cycle length", cycleLength);
    // find the start of the cycle
    const cycleStartNode = findCycleStartNode(head, cycleLength);
    console.log("find cycle start node", cycleStartNode);
    // build string/arr
    let start = head;
    // iterate from head to start of cycle
    while (start !== cycleStartNode && start !== null) {
      stringStack += start.value;
      start = start.next;
    }
    // iterate from cycle start by cycle len times
    for (let i = 0; i < cycleLength; i++) {
      if (start === null) break;

      stringStack += start.value;
      start = start.next;
    }

    console.log("cycle - built string", stringStack);
  }

  return output;
};

const isPalindrome = (s: string): boolean => {
  let start = 0;
  let end = s.length - 1;

  while (start > end) {
    if (s[start]! == s[end]) return false;

    start += 1;
    end -= 1;
  }
};

const findCycleStartNode = (head: LlNode, cycleLen: number): LlNode => {
  let slow = head;
  let end = head;

  for (let i = 0; i < cycleLen; i++) {
    end = end.next;
  }

  // advance both by 1 until they meet
  while (slow !== end && slow !== null && end !== null) {
    slow = slow.next;
    end = end.next;
  }

  return slow;
};

const findCycleLength = (intersectionNode: LlNode): number => {
  let len = 1;

  let holder = intersectionNode;
  let incrementer = intersectionNode.next;

  while (holder !== incrementer && incrementer !== null) {
    incrementer = incrementer.next;
    len += 1;
  }

  return len;
};

const head = new LlNode("a");
head.next = new LlNode("b");
head.next.next = new LlNode("c");
head.next.next.next = new LlNode("d");
head.next.next.next.next = new LlNode("e");
head.next.next.next.next.next = new LlNode("f");
head.next.next.next.next.next.next = head.next.next;

console.log(isLLPalindromic(head));
