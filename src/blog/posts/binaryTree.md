---
title: 06. Binary Trees
description: Binary Trees
date: 2023-02-06
tags:
  - data structures
  - trees
  - binary trees
---

<br />

Binary Tree is defined as a tree data structure where each node has at most 2 children. Since each element in a binary tree can have only 2 children, we typically name them the left and right child.

- each node can either have 0, 1 or 2 children
- each child can only have a parent

A Binary tree is represented by a pointer to the topmost node (commonly known as the “root”) of the tree. If the tree is empty, then the value of the root is NULL. Each node of a Binary Tree contains the following parts:

```js
function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
```

There are various types of binary tree. A perfect binary tree is the one in which all the internal nodes have two children and all leaf nodes are at the same level. It is very efficient and has two properties.

- The number of total nodes on each level doubles as we move down the tree
- The number of nodes on the last level is equal to the sum of all nodes in the other levels - 1.

A full binary tree is a special type of binary tree in which every parent node/internal node has either two or no children.

<br />

<figure>
<img class="blogPostImage" src="../assets/images/Binary tree.png">
<figcaption><b>Binary Trees</b></figcaption>
</figure>

<br />

## Binary search trees

<br />

The Binary Search Tree is built up on the idea of the binary search algorithm, which allows for fast lookup, insertion and removal of nodes.

<br />

Binary search trees have the following additional characteristics:

- Each node has a maximum of up to two children
- For each node, the values of its left descendent nodes are less than that of the current node, which in turn is less than the right descendent nodes (if any)

<figure>
<img class="blogPostImage" src="../assets/images/Binary search tree.png">
<figcaption><b>Binary Search Trees</b></figcaption>
</figure>

<br />

The way that they are set up means that, on average, each comparison allows the operations to skip about half of the tree, so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree, O(log n). However, some times the worst case can happen, when the tree isn’t balanced and the time complexity is O(n) for all three of these functions.

<br />

Using [Visualgo](https://visualgo.net/en/bst), we can visualize how Binary Search Trees work and how the main operations are performed.

<br />

### BST Pros and Cons

<br />

STRENGTHS:

- Good performance across the board, assuming that it is balanced
- Ordered
- Flexible size

DOWNSIDE:

- There is no O(1) operation, so we need to traverse to do any operation
- They are not the fastest for anything

<br />

### BST implementation

<br />

<details>
  <summary>Implementation of binary search tree and its methods</summary>

```js
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    // check if there is a root element
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      //we need a condition that will keep looping
      while (true) {
        if (value > currentNode.value) {
          //move to the right
          if (!currentNode.right) {
            currentNode.right = newNode;
            // return to exit the loop
            return this;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        }
      }
    }
  }
  lookup(value) {
    //Code here
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
```

</details>

<br />
