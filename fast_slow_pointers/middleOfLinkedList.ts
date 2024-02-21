// Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
// Output: 3

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
// Output: 4

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null
// Output: 4

class LlNode {
    value: number;
    next: LlNode;

    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

// the fast pointer will always be twice as far ahead as the slow pointer
// when the fast pointer reaches the end, the slow should be in the middle
    // if odd length list -> fast.next.next = null

const middleOfLinkedList = (head: LlNode): LlNode => {
    let slow = head;
    let fast = head;

    while(fast !== null) {
        // odd number list + fast is on last node
        if (fast.next == null) {
            break;
        }

        slow = slow.next;
        fast = fast.next.next;
    }

    // odd or even length
    return slow

}

let head = new LlNode(1)
head.next = new LlNode(2)
head.next.next = new LlNode(3)
head.next.next.next = new LlNode(4)
head.next.next.next.next = new LlNode(5);

console.log(middleOfLinkedList(head).value);
head.next.next.next.next.next = new LlNode(6);
console.log(middleOfLinkedList(head).value);
head.next.next.next.next.next.next = new LlNode(7);
console.log(middleOfLinkedList(head).value);