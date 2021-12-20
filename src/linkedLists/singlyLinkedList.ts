type LinkedListNodeValue = string | number;

interface LinkedListNode {
    val: LinkedListNodeValue;
    next: LinkedListNode | null;
}

interface SinglyLinkedList {
    head: LinkedListNode | null;
    tail: LinkedListNode | null;
    length: number;
}

class LinkedListNode {
    constructor(val: LinkedListNodeValue) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /** Adds a new node to the end of the linked list */
    push(val: LinkedListNodeValue) {
        const newNode = new LinkedListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            const newNode = new LinkedListNode(val);
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    /** Removes a node from the end of the linked list */
    pop() {
        if (!this.head) {
            return undefined;
        }
        let current: LinkedListNode | null = this.head;
        let prev = current;
        while (current.next) {
            prev = current;
            current = current.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length -= 1;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

const linkedList = new SinglyLinkedList();
linkedList.push("hello")
linkedList.push("world");
linkedList.push(99);
linkedList.pop();
linkedList.traverse();
console.log(linkedList)