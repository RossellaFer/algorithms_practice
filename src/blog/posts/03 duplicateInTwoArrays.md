---
title: 03. Two arrays - do they contain a duplicate?
description: Given two arrays, create a function that lets the user know (true/false) whether these arrays contain common items
date: 2023-02-02
tags:
  - Algorithm
  - Array
---

### Task

<br />
Given two arrays, create a function that lets the user know (true/false) whether these arrays contain common items

<br />

### Example:

<br />

const array1 = ['a','b','c','x'];
<br />
const array2 = ['z','y','i'];
<br />
should return false

<br />

const array1 = ['a','b','c','x'];
<br />
const array2 = ['z','x','i'];
<br />
should return true

<br />

### Explanation:

<br />

Confirm the question: if I had the first example, it would return false since there are no duplicated values. In the second example, the function would return true as 'x' is present in both.

<br />

#### Questions

- simple one dimensional arrays of strings?
- do we have any space complexity restriction? is space more important than time?

#### Note to self:

- handle empty array case

## Solutions

<br />

### Brute force

We could handle this with a nested for loop, which evaluates the elements of the second array against the first, second etc items of the first array. This would be inefficient though, because it would require a time complexity of O(n^2) - quadratic, but we won't need any extra space so it will be O(1).

<br />

### Hashmap

We traverse the array and when we encounter a value that does not exist in the hashmap, we add it to this. The time complexity will be O(n) and the space complexity will be O(n) since it could be as long as the length of the array (if there are no duplicates)

<br />

<details>
  <summary>Click to view solution</summary>

```js
function isThereDuplicate(array1, array2) {
  const seen = {};
  array1.forEach((item) => (seen[item] = true));
  for (let i = 0; i < array2.length; i++) {
    if (seen[array2[i]]) {
      return true;
    }
  }
  return false;
}

console.log(isThereDuplicate(["a", "b", "c", "x"], ["z", "p", "i", "t", "e"]));
```

</details>
