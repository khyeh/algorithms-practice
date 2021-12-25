type DoublyLinkedListNodeValue = string | number;

interface DoublyLinkedListNode {
    val: DoublyLinkedListNodeValue
    next: DoublyLinkedListNode | null;
    prev: DoublyLinkedListNode | null;
}

interface DoublyLinkedList {
    head: DoublyLinkedListNode | null;
    tail: DoublyLinkedListNode | null;
    length: number;
}

class DoublyLinkedListNode {
    constructor(val: DoublyLinkedListNodeValue) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /** Adds a new node to the end of the linked list */
    push(val: DoublyLinkedListNodeValue) {
        const newNode = new DoublyLinkedListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.prev = this.tail;
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
        const nodeToDelete = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail!.prev;
            this.tail!.next = null;
            nodeToDelete!.prev = null;
        }
        this.length -= 1;
        return nodeToDelete;
    }

    /** Remove a node from the beginning of the linked list */
    shift() {
        if (!this.head) {
            return undefined;
        }
        const nodeToDelete = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = nodeToDelete.next;
            this.head!.prev = null;
            nodeToDelete.next = null;
        }
        this.length -= 1;
        return nodeToDelete;
    }

    /** Add a new node to the beginning of the linked list */
    unshift(val: DoublyLinkedListNodeValue) {
        const newNode = new DoublyLinkedListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length += 1;
        return this;
    }

    /** Return sthe node at the specified index */
    get(index: number) {
        if (!this.head || index < 0) {
            return null;
        }
        if (index <= this.length / 2) {
            let current = this.head;
            let i = 0;
            while (i < index) {
                if (current.next === null) {
                    return null;
                }
                current = current.next;
                i++;
            }
            return current;
        }
        let current = this.tail;
        let i = this.length - 1;
        while (i !== index) {
            if (!current) {
                return null;
            }
            current = current.prev;
            i--;
        }
        return current;
    }

    /** Change the value at specified index to specified value 
     *  returns true if set is successful, false if not
     */
    set(index: number, val: DoublyLinkedListNodeValue) {
        if (!this.head || index < 0) {
            return false;
        }
        const current = this.get(index);
        if (current) {
            current.val = val;
            return true;
        } else {
            return false;
        }
    }

    /** Adds a new node with specified value at specified index */
    insert(index: number, val: DoublyLinkedListNodeValue) {
        if (!this.head || index < 0) {
            return false;
        }
        if (index === this.length) {
            return !!(this.push(val));
        }
        if (index === 0) {
            return !!(this.unshift(val));
        }
        const newNode = new DoublyLinkedListNode(val);
        const prevNode = this.get(index - 1);
        const nextNode = prevNode!.next;
        prevNode!.next = newNode, newNode.prev = prevNode;
        newNode.next = nextNode, nextNode!.prev = newNode;
        this.length += 1;
        return true;
    }

    /** Removes node at specified index */
    remove(index: number) {
        if (index > this.length || !this.head) {
            return null;
        }
        if (index = this.length - 1) {
            return this.pop();
        }
        if (index === 0) {
            return this.shift();
        }
        const nodeToRemove = this.get(index);
        const prev = nodeToRemove?.prev;
        const next = nodeToRemove?.next;
        prev!.next = next!.prev, next!.prev = prev!.next;
        this.length -= 1;
        return nodeToRemove;
    }

    /** Reverses the linked list in place 
     *  Note that solutoin is identical to singly linked lists
     */
    reverseList() {
        if (!this.head || this.length === 1) {
            return this;
        }

        // swap the head and tail 
        let node: DoublyLinkedListNode | null = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev: DoublyLinkedListNode | null = null;
        let next: DoublyLinkedListNode | null = null;

        while (node) {
            next = node!.next;
            node!.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(1);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
doublyLinkedList.push(4);
doublyLinkedList.push(5);
doublyLinkedList.unshift(99);
console.log(doublyLinkedList.get(0)?.val);
console.log(doublyLinkedList.get(4)?.val);
doublyLinkedList.set(0, "hello");
console.log(doublyLinkedList.get(0)?.val);
// console.log(doublyLinkedList.insert(4, "hello"));
doublyLinkedList.remove(0);
doublyLinkedList.remove(4);
doublyLinkedList.remove(2);
