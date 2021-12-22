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

    /** Removes a node from the beginning (head node) of the linked list */
    shift() {
        if (!this.head) {
            return undefined;
        }
        const currentHead = this.head;
        this.head = currentHead.next;
        this.length -= 1;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    /** Adds a new node to the beginning (head) of the linked list */
    unshift(val: LinkedListNodeValue) {
        const newNode = new LinkedListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
        return this;
    }

    /** Returns the node the specified index */
    get(index: number) {
        if (!this.head || this.length < index) {
            return null;
        }
        let current = this.head;
        let i = index;
        while (i > 0) {
            // guard for TS because it cannot deduce that length check will guarantee
            // current not to be null
            if (current.next === null) {
                return null;
            }
            current = current.next;
            i--;
        }
        return current;
    }

    /** Change the value at specified index to specified value 
     *  returns true if set is successful, false if not
     */
    set(index: number, val: LinkedListNodeValue) {
        const locatedNode = this.get(index);
        if (locatedNode) {
            locatedNode.val = val;
            return true;
        }
        return false;
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
console.log(linkedList.set(2, "dog"));
// linkedList.pop();
// linkedList.shift();
linkedList.traverse();
// console.log(linkedList)