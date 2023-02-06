---
title: 07. Binary Trees
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
