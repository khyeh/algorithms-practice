interface BSTNode {
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;
}

interface BST {
  root: BSTNode | null;
}

class BSTNode {
  constructor(val: number) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val: number) {
    const newNode = new BSTNode(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current: BSTNode | null = this.root;
    while (true) {
      if (val === current.value) {
        return null;
      }
      if (val < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val: number): boolean {
    if (!this.root) {
      return false;
    }
    let current: BSTNode | null = this.root;
    while (true) {
      if (val === current?.value) {
        return true;
      }
      if (val < current?.value) {
        if (current.left) {
          current = current.left;
        } else {
          return false;
        }
      } else {
        if (current.right) {
          current = current?.right;
        } else {
          return false;
        }
      }
    }
  }

  print() {
    const values: number[] = [];
    const traverse = (current = this.root) => {
      if (current?.left) {
        traverse(current.left);
      }
      if (current?.value) {
        values.push(current.value);
      }
      if (current?.right) {
        traverse(current.right);
      }
    };
    traverse();
    return values;
  }

  bfsPrint() {
    const queue = [];
    let visited = [];
    if (!this.root) {
      return null;
    }
    queue.push(this.root);
    while (queue.length) {
      let visitedNode: BSTNode = queue.shift()!;
      visited.push(visitedNode.value);
      if (visitedNode?.left) {
        queue.push(visitedNode.left);
      }
      if (visitedNode?.right) {
        queue.push(visitedNode.right);
      }
    }
    return visited;
  }

  preOrderPrint(current = this.root) {
    const values: number[] = [];
    const traverse = (current: BSTNode | null) => {
      if (current?.value) {
        values.push(current.value);
      }
      if (current?.left) {
        traverse(current.left);
      }
      if (current?.right) {
        traverse(current.right);
      }
    };
    traverse(this.root);
    return values;
  }

  postOrderPrint(current = this.root) {
    const values: number[] = [];
    const traverse = (current: BSTNode | null) => {
      if (current?.left) {
        traverse(current.left);
      }
      if (current?.right) {
        traverse(current.right);
      }
      if (current?.value) {
        values.push(current.value);
      }
    };
    traverse(this.root);
    return values;
  }
}

const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(14);
bst.insert(7);

// console.log(bst.find(99)); // false
// console.log(bst.find(10)); // true
// console.log(bst.find(5)); // true
// console.log(bst.find(14)); // true
// console.log(bst.find(7)); // true
// console.log(bst.find(8)); // false

console.log("bfs", bst.bfsPrint());
console.log("pre-order", bst.preOrderPrint());
console.log("in-order", bst.print());
console.log("post-order", bst.postOrderPrint());
