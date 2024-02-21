var LlNode = /** @class */ (function () {
    function LlNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return LlNode;
}());
var reverse_linked_list = function (head) {
    // iterate:
    // placeholder for head of reversed list and the next LlNode from input LL
    var current = head;
    var previous = null;
    while (current !== null) {
        var next = current.next; // placeholder for next node
        current.next = previous; // reverse the current node
        previous = current; // advance previous node
        current = next; // advance current
    }
    return previous; // next will be null (terminal)
};
var head = new LlNode(2);
head.next = new LlNode(4);
head.next.next = new LlNode(6);
head.next.next.next = new LlNode(8);
head.next.next.next.next = new LlNode(10);
console.log(reverse_linked_list(head));
