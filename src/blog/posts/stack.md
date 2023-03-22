---
title: 04. Stack
description: Theory about stacks and how they can be built using JavaScript
date: 2023-02-04
tags:
  - data structures
  - stacks
---

<br />

A stack is a linear data structure that follows a particular order in which the operations are performed.
The order is LIFO (last in first out), because the last item that comes in is the first item that comes out.

<br />
<br />

## Uses

- used in language-specific language (like JavaScript engine)
- when functions get called, they usually follow the stack model
- browser history
- undo/redo functionality when writing text
- call logs

<br />

## Operations

<table class="notation_table">
  <tr>
    <th>Operation</th>
    <th>Complexity</th>
  </tr>
  <tr>
    <td>Lookup</td>
    <td>O(1)</td>
  </tr>
    <tr>
    <td>Pop</td>
    <td>O(1)</td>
  </tr>
    <tr>
    <td>Push</td>
    <td>O(1)</td>
  </tr>
    <tr>
    <td>Peek/Top</td>
    <td>O(1)</td>
  </tr>
</table>

<br />
<br />

## Implementation of stacks in JavaScript

Stacks are not native in JavaScript. They can be implemented using linked lists and arrays and you need to think about what sorts of operations you might need and choose how to implement them.

<br />

### Arrays

Arrays allow cache locality, which makes it faster to access its items as they are stored in consecutive memory

<br />

<details>
  <summary>Implementation of stacks using arrays</summary>

```js
class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push("google");
myStack.peek();
myStack.push("udemy");
myStack.push("discord");
myStack.pop();

console.log(myStack);
```

</details>

<br />

### Linked list

<br />

Linked lists have extra memory associated to it as we need to use pointers to the next item (or also to the previous if using doubly linked lists).
An advantage is that they have dynamic memory, so they can shrink and grow at runtime by allocating and deallocating memory.

<details>
  <summary>Implementation of stacks using arrays</summary>

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (!this.top) return null;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push("google");
myStack.peek();
myStack.push("udemy");
myStack.push("discord");
myStack.pop();

console.log(myStack);

//Discord
//Udemy
//google
```

</details>
