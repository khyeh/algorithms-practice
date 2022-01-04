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
        let parentIndex = Math.floor((pushedValIndex - 1) / 2);

        while (this.values[parentIndex] < this.values[pushedValIndex]) {
            // swap pushed value with parent value
            let temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[pushedValIndex];
            this.values[pushedValIndex] = temp;

            // bubble up to next parent
            pushedValIndex = parentIndex;
            parentIndex = Math.floor((pushedValIndex - 1) / 2);
        }
        return this;
    }

    extractMax(): number | null {
        if (this.values.length === 0) {
            return null;
        }
        if (this.values.length === 1) {
            return this.values.pop()!;
        }

        // swap the first and last values of the array
        this.swapValues(0, this.values.length - 1)
        const extractedValue = this.values.pop()!;

        // sink down root
        let parentIndex = 0;
        let firstChild = 2 * parentIndex + 1 >= this.values.length ? -1 : this.values[2 * parentIndex + 1];
        let secondChild = 2 * parentIndex + 2 >= this.values.length ? -1 : this.values[2 * parentIndex + 2];

        while (this.values[parentIndex] < firstChild || this.values[parentIndex] < secondChild) {
            if (this.values[parentIndex] < firstChild && this.values[parentIndex] < secondChild) {
                if (firstChild > secondChild) {
                    this.swapValues(parentIndex, 2 * parentIndex + 1);
                    parentIndex = 2 * parentIndex + 1;
                } else {
                    this.swapValues(parentIndex, 2 * parentIndex + 2);
                    parentIndex = 2 * parentIndex + 2;
                }
            }
            else if (this.values[parentIndex] < firstChild) {
                this.swapValues(parentIndex, parentIndex + 1)
                parentIndex = 2 * parentIndex + 1;
            }
            else if (this.values[parentIndex] < secondChild) {
                this.swapValues(parentIndex, parentIndex + 2)
                parentIndex = 2 * parentIndex + 2
            }
            else {
                break;
            }
            firstChild = 2 * parentIndex + 1 >= this.values.length ? -1 : this.values[2 * parentIndex + 1];
            secondChild = 2 * parentIndex + 2 >= this.values.length ? -1 : this.values[2 * parentIndex + 2];
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

