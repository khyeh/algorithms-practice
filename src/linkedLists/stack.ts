interface StackNode<TVal> {
  val: TVal;
  next: StackNode<TVal> | null;
}

interface Stack<TVal> {
  first: StackNode<TVal> | null;
  last: StackNode<TVal> | null;
  size: number;
}

class StackNode<TVal> {
  constructor(val: TVal) {
    this.val = val;
    this.next = null;
  }
}

/** Implementation of a stack via singly linked list
 *  insertion: O(1)
 *  removal: O(1)
 */
class Stack<TVal> {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val: TVal) {
    const newNode = new StackNode(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this.size;
  }

  pop() {
    const nodeToDelete = this.first;
    if (!nodeToDelete) {
      return null;
    } else if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size = 0;
      return nodeToDelete.val;
    } else {
      this.first = nodeToDelete.next;
      this.size--;
      return nodeToDelete.val;
    }
  }
}

const myStack = new Stack<string | number>();
myStack.push("first");
myStack.push("second");
myStack.push("third");
myStack.push("fourth");
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
