var LlNode = /** @class */ (function () {
    function LlNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return LlNode;
}());
var calculate_cycle_length = function (node) {
    var cycleLen = 0;
    var currentNode = node;
    while (true) {
        cycleLen += 1;
        currentNode = currentNode.next;
        if (currentNode === node)
            break;
    }
    return cycleLen;
};
var find_cycle_length = function (head) {
    var slow = head;
    var fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return calculate_cycle_length(slow);
        }
    }
    return 0;
};
var head = new LlNode(1);
head.next = new LlNode(2);
head.next.next = new LlNode(3);
head.next.next.next = new LlNode(4);
head.next.next.next.next = new LlNode(5);
head.next.next.next.next.next = new LlNode(6);
head.next.next.next.next.next.next = head.next.next;
console.log("LinkedList cycle length: ".concat(find_cycle_length(head)));
head.next.next.next.next.next.next = head.next.next.next;
console.log("LinkedList cycle length: ".concat(find_cycle_length(head)));
