class LlNode {
    value: number;
    next: LlNode | null;
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const find_cycle_start = (head: LlNode): LlNode => {
    // find where fast & slow pointers meet
        // find the cycle length
            // iterate at meeting point until we come back to the input node
        // use cycle length to repeat slow + fast @ head
    let slow = head;
    let fast = head;

    const findCycleLength = (node: LlNode): number => {
        let cycleLength = 0;
        let current = node;

        while (true) {
            current = current.next;
            cycleLength += 1;
            if (current === node) {
                break;
            }
        }
        return cycleLength;
    };

    const findStart = (k: number): LlNode => {
        let slow = head;
        let fast = head;

        // initiate fast as the cycle length
        // advance both fast and slow by 1 until they meet at the cycle head
        for (let i = k; i > 0; i--) {
            fast = fast.next;
        };

        while (slow !== fast) {
            slow = slow.next;
            fast = fast.next;
            // return slow; !!! this does not work if the start of the cycle is at the head answer: you'll never enter the while loop
        }

        return slow;
    };

    let cycleLength: number = 0;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) {
            cycleLength = findCycleLength(slow);
            break;
        }
    }
    return findStart(cycleLength);
}

const head = new LlNode(1);
head.next = new LlNode(2);
head.next.next = new LlNode(3);
head.next.next.next = new LlNode(4);
head.next.next.next.next = new LlNode(5);
head.next.next.next.next.next = new LlNode(6);

head.next.next.next.next.next.next = head.next.next;
// console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head.next.next.next;
// console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);