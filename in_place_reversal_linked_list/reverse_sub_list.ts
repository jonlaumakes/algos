class LlNode {
    value: number;
    next: LlNode;

    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    get_list() {
        let result = "";
        let temp: LlNode = this;
        while (temp !== null) {
            result += temp.value + " ";
            temp = temp.next;
        }
        return result;
    }
}

const reverse_sub_list = (head: LlNode, p: number, q: number): LlNode=> {
    if (p === q) {
        return head;
    }
    // advance to the p-th node
    let current = head;
    let previous = null;
    for (let i = p; i > 1; i--) {
        previous = current;
        current = current.next;
    };

    let lastNodeOfFirstSection = previous; // 2
    let lastNodeOfSubList = current; // 3

    let k = q - p +1; // 2 + 1 = 3

    let next = null;
    while (k > 0 && current !== null) {
        next = current.next; // 4 -> 5 -> 6
        current.next = previous; // 2 -> 3 -> 4
        previous = current; // 3 -> 4 -> 5
        current = next;     // 4 -> 5 -> 6
        k--; // 2 -> 1 -> 0
    }

    // attach end of first section to head of sub sequence (2-> 5)
    if (lastNodeOfFirstSection !== null) {
        lastNodeOfFirstSection.next = previous;
    } else {
        // lastNodeOfFirstSection === null -> we are changing the first node (p=1)
        head = previous;
    }

    // attach last subNode of sublist to start of 3rd section
    lastNodeOfSubList.next = current;

    return head;
}

let head = new LlNode(1)
head.next = new LlNode(2)
head.next.next = new LlNode(3)
head.next.next.next = new LlNode(4)
head.next.next.next.next = new LlNode(5)
head.next.next.next.next = new LlNode(6)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 4).get_list()}`)