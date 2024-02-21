class LlNode {
    value: number;
    next: LlNode | null;

    constructor(value: number, next: LlNode = null) {
        this.value = value;
        this.next = next;
    }
}
const calculate_cycle_length = (node: LlNode): number => {
    let cycleLen = 0;
    let currentNode = node;

    // while true
        // advance currentNode & increment counter
        // if currentNode === start node -> break out of the while loop

    while (true) {
        currentNode = currentNode.next;
        cycleLen += 1;
        if (currentNode === node) break;
    }

    return cycleLen;
}

const find_cycle_length = (head: LlNode): number => {
    let slow = head;
    let fast = head;

    // while fast (or fast.next) has not reached the end
        // we will advance the slow and fast pointers
        // if the fast && slow pointers are at the same node -> found the start of the loop
            // calc the loop length at pointer position
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return calculate_cycle_length(slow);
        }
    }

    return 0;
}


const head = new LlNode(1);
head.next = new LlNode(2);
head.next.next = new LlNode(3);
head.next.next.next = new LlNode(4);
head.next.next.next.next = new LlNode(5);
head.next.next.next.next.next = new LlNode(6);
head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);
