var LlNode = /** @class */ (function () {
    function LlNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    LlNode.prototype.get_list = function () {
        var result = "";
        var temp = this;
        while (temp !== null) {
            result += temp.value + " ";
            temp = temp.next;
        }
        return result;
    };
    return LlNode;
}());
var reverse_sub_list = function (head, p, q) {
    if (p === q) {
        return head;
    }
    // advance to the p-th node
    var current = head;
    var previous = null;
    for (var i = p; i > 1; i--) {
        previous = current;
        current = current.next;
    }
    ;
    var lastNodeOfFirstSection = previous; // 2
    var lastNodeOfSubList = current; // 3
    var k = q - p + 1; // 2 + 1 = 3
    var next = null;
    while (k > 0 && current !== null) {
        next = current.next; // 4 -> 5 -> 6
        current.next = previous; // 2 -> 3 -> 4
        previous = current; // 3 -> 4 -> 5
        current = next; // 4 -> 5 -> 6
        k--; // 2 -> 1 -> 0
    }
    // attach end of first section to head of sub sequence (2-> 5)
    lastNodeOfFirstSection.next = previous;
    // attach last subNode of sublist to start of 3rd section
    lastNodeOfSubList.next = current;
    return head;
};
var head = new LlNode(1);
head.next = new LlNode(2);
head.next.next = new LlNode(3);
head.next.next.next = new LlNode(4);
head.next.next.next.next = new LlNode(5);
head.next.next.next.next = new LlNode(6);
console.log("Nodes of original LinkedList are: ".concat(head.get_list()));
console.log("Nodes of reversed LinkedList are: ".concat(reverse_sub_list(head, 2, 4).get_list()));
