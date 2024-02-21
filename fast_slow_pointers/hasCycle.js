var LlNode = /** @class */ (function () {
    function LlNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return LlNode;
}());
var hasCycle = function (llHead) {
    var slow = llHead;
    var fast = llHead;
    // if either of the pointers reach the end, node = null
    // If there is a cycle: they wil eventually meet at the same place
    // !cycle -> the fast or fast.next is at the end
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
};
var head = new LlNode(1);
head.next = new LlNode(2);
var cycleStart = head.next.next = new LlNode(3);
head.next.next.next = new LlNode(4);
head.next.next.next.next = new LlNode(5);
var cycleEnd = head.next.next.next.next.next = new LlNode(6);
cycleEnd.next = cycleStart;
console.log('LL has cycle', hasCycle(head));
