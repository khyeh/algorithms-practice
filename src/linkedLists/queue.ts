interface QueueNode<TVal> {
    val: TVal;
    next: QueueNode<TVal> | null;
    prev: QueueNode<TVal> | null;
}

interface Queue<TVal> {
    first: QueueNode<TVal> | null;
    last: QueueNode<TVal> | null;
    size: number;
}

class QueueNode<TVal> {
    constructor(val: TVal) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

/** Implementation of a queue via a doubly linked list
 *  Insertion: O(1)
 *  Removal: O(1)
 */
class Queue<TVal> {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val: TVal) {
        const newNode = new QueueNode(val);
        if (!this.last) {
            this.first = newNode;
            this.last = this.first;
        } else {
            newNode.prev = this.last;
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this.size;
    }

    dequeue() {
        const nodeToRemove = this.first;
        if (!nodeToRemove) {
            return null;
        }
        else if (!nodeToRemove.next) {
            this.first = null;
            this.last = null;
            this.size = 0;
            return nodeToRemove.val;
        }
        else {
            this.first = nodeToRemove.next;
            this.first.prev = null;
            nodeToRemove.next = null;
            this.size--;
            return nodeToRemove.val
        }
    }
}

const queue = new Queue<string | number>();
queue.enqueue("first")
queue.enqueue("second")
queue.enqueue("third")
queue.enqueue("fourth")
queue.enqueue("fifth")
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());