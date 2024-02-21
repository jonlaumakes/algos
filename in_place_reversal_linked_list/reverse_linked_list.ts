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

const reverse_linked_list = (head: LlNode): LlNode => {
    // iterate:
        // placeholder for head of reversed list and the next LlNode from input LL
    let current = head;
    let previous = null;

    while (current !== null) {
        let next = current.next; // placeholder for next node
        current.next = previous; // reverse the current node

        previous = current; // advance previous node
        current = next; // advance current
    }

    return previous; // next will be null (terminal)
};


const head = new LlNode(2);
head.next = new LlNode(4);
head.next.next = new LlNode(6);
head.next.next.next = new LlNode(8);
head.next.next.next.next = new LlNode(10);

console.log(reverse_linked_list(head));
