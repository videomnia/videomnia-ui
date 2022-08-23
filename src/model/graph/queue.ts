class QueueNode {
  private left: QueueNode;
  private right: QueueNode;
  private value: number;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  public addLeft(node: QueueNode): void {
    if (node !== null && node !== undefined) {
      this.left = node;
      node.right = this;
    }
  }

  public removeRight(): void {
    if (this.right !== null && this.right !== undefined) {
      this.right.left = null;
      this.right = null;
    }
  }

  public getLeft(): QueueNode {
    return this.left;
  }

  public getRight(): QueueNode {
    return this.right;
  }

  public getValue(): number {
    return this.value;
  }
}

export class Queue {
  private size: number;
  private tail: QueueNode;
  private head: QueueNode;

  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  public isEmpty(): boolean {
    return this.getSize() === 0;
  }

  public getSize(): number {
    return this.size;
  }

  public enqueue(value: number): void {
    let node: QueueNode = new QueueNode(value);

    if (this.head == null && this.tail == null) {
      this.head = node;
      this.tail = node;
      this.size = 1;
    } else {
      this.tail.addLeft(node);
      this.tail = node;
      this.size++;
    }
  }

  public dequeue(): number {
    if (this.isEmpty()) {
      return undefined;
    }

    let value: number = this.head.getValue();

    this.head = this.head.getLeft();
    this.size--;
    if (this.size > 1) {
      this.head.removeRight();
    }
    if (this.size == 0) {
      this.head = null;
      this.tail = null;
    }
    return value;
  }

  public getHead(): number {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.head.getValue();
  }

  public getTail(): number {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.tail.getValue();
  }
}
