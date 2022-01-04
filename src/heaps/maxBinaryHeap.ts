interface MaxBinaryHeap {
    values: number[];
}

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    #swapValues(i1: number, i2: number) {
        let temp = this.values[i1];
        this.values[i1] = this.values[i2];
        this.values[i2] = temp;
    }

    outputValues() {
        return this.values;
    }

    insert(val: number) {
        this.values.push(val);
        let pushedValIndex = this.values.length - 1;
        let parentIdx = Math.floor((pushedValIndex - 1) / 2);

        while (parentIdx >= 0) {
            // swap the pushed value with parent value
            if (this.values[parentIdx] < this.values[pushedValIndex]) {
                this.#swapValues(parentIdx, pushedValIndex)
            }
            // bubble up to next parent
            pushedValIndex = parentIdx;
            parentIdx = Math.floor((pushedValIndex - 1) / 2);
        }
        return this;
    }

    extractMax(): number | null {
        const heapSize = this.values.length;
        if (heapSize === 0) return null;
        if (heapSize === 1) return this.values.pop()!;

        // swap the first and last values of the array
        this.#swapValues(0, heapSize - 1)
        const extractedValue = this.values.pop()!;

        // sink down root
        let parentIdx = 0;
        let firstChildIdx = 2 * parentIdx + 1;
        let secondChildIdx = 2 * parentIdx + 2;
        let firstChild = firstChildIdx >= heapSize ? -1 : this.values[firstChildIdx];
        let secondChild = secondChildIdx >= heapSize ? -1 : this.values[secondChildIdx];

        while (this.values[parentIdx] < firstChild || this.values[parentIdx] < secondChild) {
            if (this.values[parentIdx] < firstChild && this.values[parentIdx] < secondChild) {
                if (firstChild > secondChild) {
                    this.#swapValues(parentIdx, 2 * parentIdx + 1);
                    parentIdx = 2 * parentIdx + 1;
                } else {
                    this.#swapValues(parentIdx, 2 * parentIdx + 2);
                    parentIdx = 2 * parentIdx + 2;
                }
            }
            else if (this.values[parentIdx] < firstChild) {
                this.#swapValues(parentIdx, parentIdx + 1)
                parentIdx = 2 * parentIdx + 1;
            }
            else if (this.values[parentIdx] < secondChild) {
                this.#swapValues(parentIdx, parentIdx + 2)
                parentIdx = 2 * parentIdx + 2
            }
            else {
                break;
            }
            firstChild = 2 * parentIdx + 1 >= heapSize ? -1 : this.values[2 * parentIdx + 1];
            secondChild = 2 * parentIdx + 2 >= heapSize ? -1 : this.values[2 * parentIdx + 2];
        }
        return extractedValue;
    }
}

const maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(22);
maxBinaryHeap.insert(32);
maxBinaryHeap.insert(42);
maxBinaryHeap.insert(2);
maxBinaryHeap.insert(62);
maxBinaryHeap.insert(9);
maxBinaryHeap.insert(35);
console.log(maxBinaryHeap.outputValues())
maxBinaryHeap.extractMax();
console.log(maxBinaryHeap.outputValues())
maxBinaryHeap.extractMax();
console.log(maxBinaryHeap.outputValues())
maxBinaryHeap.extractMax();
console.log(maxBinaryHeap.outputValues())
maxBinaryHeap.extractMax();
console.log(maxBinaryHeap.outputValues())
maxBinaryHeap.extractMax();
console.log(maxBinaryHeap.outputValues())
maxBinaryHeap.extractMax();
console.log(maxBinaryHeap.outputValues())