class Node {
  constructor(elem) {
    this.element = elem;
    this.next = null;
  };
};

class Stack {
  constructor(length = 10) {
    this.countElements = 0;
    this.head = null;
    this.stackLength = length;
    if (!Number.isInteger(length) || length < 1) {
      throw new Error();
    };
  };

  push(elem) {
    this.countElements++;
    if (this.countElements > this.stackLength) {
      throw new Error('Stack is full');
    };

    let node = new Node(elem),
    current;

    current = this.head;
    node.next = current;
    this.head = node;
  };

  pop() {
    this.countElements--;
    if (this.countElements <= 0) {
      throw new Error('Stack is empty');
    };

    let current = this.head;

    if (current) {
      let elem = current.element;
      current = current.next;
      this.head = current;
      return elem;
    };
  };

  peek() {
    if (this.head) {
      return this.head.element;
    };

    return null;
  };

  toArray() {
    let array = [];
    let current = this.head;

    while (current) {
      array.push(current.element);
      current = current.next;
    };

    return array;
  };

  isEmpty() {
    return this.length === 0;
  };

  static fromIterable(iterable) {
    let newStack = new Stack();
    newStack.countElements = iterable.countElements;
    newStack.stackLength = iterable.stackLength;

    newStack.head = iterable.head;

    return newStack;
  };
};
