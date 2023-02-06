---
title: 05. Queue
description: Theory about stacks and how they can be built using JavaScript
date: 2023-02-04
tags:
  - data structures
  - queues
---

<br />

A Queue is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order. We define a queue to be a list in which all additions to the list are made at one end, and all deletions from the list are made at the other end.

<br />

## Uses

- apps where you queue to buy or wait for things (concert tickets, uber)
- printers
- memory management
- applied on WhatsApp when we send messages to our friends and they don’t have an internet connection then these messages are queued on the server of WhatsApp.

<br />

## Operations

Lookup = O(n)

enqueue = O(1)

dequeue = O(1)

peek = O(1)

<br />

## Implementation of queues in JavaScript

Queues are not native in JavaScript. They can be implemented using linked lists. Arrays could also be used, but they are really inefficient, as to dequeue we would need to shift all indexes when removing from the top.

<br />

### Linked list

Arrays allow cache locality, which makes it faster to access its items as they are stored in consecutive memory

<br />

<details>
  <summary>Implementation of queues using linked lists</summary>

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;

    this.length--;
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();
console.log(myQueue.enqueue("Joy"));
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
```

</details>

<br />

### Stacks

<br />

One of the most common interview questions is to build a queue data structure using two stacks.

<br />

<figure>
<img class="blogPostImage" src="../assets/images/implement queues as stacks.png">
<figcaption><b><a href="https://www.youtube.com/@andygala888" target="_blank">Source: Andy Gala Youtube channel</a></b></figcaption>
</figure>

<br />

<details>
  <summary>Implementation of stacks using stacks</summary>

```js
class MyQueue {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }

  push(val) {
    this.pushStack.push(val);
  }

  pop() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }

    return this.popStack.pop();
  }

  peek() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack[this.popStack.length - 1];
  }

  empty() {
    return !this.pushStack.length && !this.popStack.length;
  }
}
```

</details>
