var LlNode = /** @class */ (function () {
    function LlNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return LlNode;
}());
var find_cycle_start = function (head) {
    // find where fast & slow pointers meet
    // find the cycle length
    // iterate at meeting point until we come back to the input node
    // use cycle length to repeat slow + fast @ head
    var slow = head;
    var fast = head;
    var findCycleLength = function (node) {
        var cycleLength = 0;
        var current = node;
        while (true) {
            current = current.next;
            cycleLength += 1;
            if (current === node) {
                break;
            }
        }
        return cycleLength;
    };
    var findStart = function (k) {
        var slow = head;
        var fast = head;
        // initiate fast as the cycle length
        // advance both fast and slow by 1 until they meet at the cycle head
        for (var i = k; i > 0; i--) {
            fast = fast.next;
        }
        ;
        while (slow !== fast) {
            slow = slow.next;
            fast = fast.next;
            return slow;
        }
    };
    var cycleLength = 0;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) {
            cycleLength = findCycleLength(slow);
            break;
        }
    }
    return findStart(cycleLength);
};
var head = new LlNode(1);
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
console.log("LinkedList cycle start: ".concat(find_cycle_start(head).value));
