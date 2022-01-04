interface PriorityQueueNode {
    name: string;
    priority: number;
}

interface PriorityQueue {
    values: PriorityQueueNode[];
}

class PriorityQueueNode {
    constructor(name: string, priority: number) {
        this.name = name;
        this.priority = priority;
    }
}

/** Min Binary Heap */
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    #swapValues(i1: number, i2: number) {
        let temp = this.values[i1];
        this.values[i1] = this.values[i2];
        this.values[i2] = temp;
    }

    outputValues() {
        return this.values.map(node => node.priority);
    }

    enqueue(name: string, priority: number) {
        const priorityQueueNode = new PriorityQueueNode(name, priority)
        this.values.push(priorityQueueNode);
        let pushedValIndex = this.values.length - 1;
        let parentIdx = Math.floor((pushedValIndex - 1) / 2);

        while (parentIdx >= 0) {
            // swap the pushed node with parent node
            if (this.values[parentIdx].priority > this.values[pushedValIndex].priority) {
                this.#swapValues(parentIdx, pushedValIndex)
            }
            // bubble up to next parent
            pushedValIndex = parentIdx;
            parentIdx = Math.floor((pushedValIndex - 1) / 2);
        }
        return this;
    }

    dequeue(): PriorityQueueNode | null {
        if (this.values.length === 0) return null;
        if (this.values.length === 1) return this.values.pop()!;

        // swap the first and last values of the array
        this.#swapValues(0, this.values.length - 1)
        const extractedNode = this.values.pop()!;

        // sink down root
        let parentIdx = 0;
        let firstChildIdx = 2 * parentIdx + 1;
        let secondChildIdx = 2 * parentIdx + 2;
        let firstChildPriority = firstChildIdx >= this.values.length
            ? Math.min()
            : this.values[firstChildIdx].priority;
        let secondChildPriority = secondChildIdx >= this.values.length
            ? Math.min()
            : this.values[secondChildIdx].priority;

        while (this.values[parentIdx].priority > firstChildPriority
            || this.values[parentIdx].priority > secondChildPriority) {
            if (this.values[parentIdx].priority > firstChildPriority &&
                this.values[parentIdx].priority > secondChildPriority) {
                if (firstChildPriority <= secondChildPriority) {
                    this.#swapValues(parentIdx, 2 * parentIdx + 1);
                    parentIdx = 2 * parentIdx + 1;
                } else {
                    this.#swapValues(parentIdx, 2 * parentIdx + 2);
                    parentIdx = 2 * parentIdx + 2;
                }
            }
            else if (this.values[parentIdx].priority > firstChildPriority) {
                this.#swapValues(parentIdx, parentIdx + 1)
                parentIdx = 2 * parentIdx + 1;
            }
            else if (this.values[parentIdx].priority > secondChildPriority) {
                this.#swapValues(parentIdx, parentIdx + 2)
                parentIdx = 2 * parentIdx + 2
            }
            else {
                break;
            }
            firstChildPriority = 2 * parentIdx + 1 >= this.values.length
                ? Math.min()
                : this.values[2 * parentIdx + 1].priority;
            secondChildPriority = 2 * parentIdx + 2 >= this.values.length
                ? Math.min()
                : this.values[2 * parentIdx + 2].priority;
        }
        return extractedNode;
    }
}

const priorityQueue = new PriorityQueue();


priorityQueue.enqueue("concussion", 3);
priorityQueue.enqueue("low fever", 4);
priorityQueue.enqueue("covid", 2);
priorityQueue.enqueue("ER", 1);
priorityQueue.enqueue("visiting", 5);
priorityQueue.enqueue("broken arm", 3);
console.log(priorityQueue.outputValues());
priorityQueue.dequeue();
console.log(priorityQueue.outputValues());
priorityQueue.dequeue();
console.log(priorityQueue.outputValues());
priorityQueue.dequeue();
console.log(priorityQueue.outputValues());
priorityQueue.dequeue();
console.log(priorityQueue.outputValues());
priorityQueue.dequeue();
console.log(priorityQueue.outputValues());
priorityQueue.dequeue();
console.log(priorityQueue.outputValues());
