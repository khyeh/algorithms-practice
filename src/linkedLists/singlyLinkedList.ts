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

  /** Adds a new node with specified value at specified index */
  insert(index: number, val: LinkedListNodeValue) {
    if (index < 0 || this.length < index) {
      return false;
    }
    if (index === this.length) {
      return !!this.push(val);
    }
    if (index === 0) {
      return !!this.unshift(val);
    }
    const newNode = new LinkedListNode(val);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode!.next;
    prevNode!.next = newNode;
    newNode.next = nextNode;
    this.length += 1;
    return true;
  }

  /** Removes node at specified index */
  remove(index: number) {
    if (index < 0 || index > this.length) {
      return null;
    }
    // node to remove is guaranteed to be tail
    if (index === this.length - 1) {
      return this.pop();
    }
    // node to remove is guaranteed to be head
    if (index === 0) {
      return this.shift();
    }
    let prevNode = this.get(index - 1);
    const nodeToDelete = prevNode!.next;
    prevNode!.next = nodeToDelete!.next;
    this.length -= 1;
    return nodeToDelete;
  }

  /** Reverses the linked list in place */
  reverseList() {
    if (!this.head || this.length === 1) {
      return this;
    }

    // swap the head and tail
    let node: LinkedListNode | null = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev: LinkedListNode | null = null;
    let next: LinkedListNode | null = null;

    while (node) {
      next = node!.next;
      node!.next = prev;
      prev = node;
      node = next;
    }
    return this;
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
linkedList.push("hello");
linkedList.push("world");
linkedList.push(99);
linkedList.set(2, "dog");
linkedList.insert(1, "weird");
linkedList.remove(1);
linkedList.reverseList();
linkedList.pop();
linkedList.shift();
linkedList.traverse();
