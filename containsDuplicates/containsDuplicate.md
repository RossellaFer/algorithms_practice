---
title: Contains duplicate
description: Given two arrays, create a function that lets the user know (true/false) whether these arrays contain common items
date: 2023-02-02
tags:
  - Algorithm
  - Array
  - Leetcode
---

### Task

<br />
Given two arrays, create a function that lets the user know (true/false) whether these arrays contain common items

<br />

### Example:

<br />

const array1 = ['a','b','c','x']
const array2 = ['z','y','i'];
should return false

<br />

// const array1 = ['a','b','c','x']
// const array2 = ['z','x','i'];
// should return true

<br />
<br />

### Explanation:

<br />

Confirm the question: if I had the first example, it would return false since there are no duplicated values. In the second example, the function would return true as 'x' is present in both.

Questions

- simple one dimensional arrays of strings?
- do we have any space complexity restriction? is space more important than time?

Note to self:

- handle empty array case

## Brute force

We could handle this with a nested for loop, which evaluates the elements of the second array against the first, second etc items of the first array. This would be inefficient though, because it would require a time complexity of O(n^2) - quadratic, but we won't need any extra space so it will be O(1).

## Sorting

Sorting the array first and then comparing each value with the one next to it would allow us to iterate through the array only once. The time complexity for this is O(n log n), since we need O(log n) to sort and then O(n) to traverse the array once. Space complexity will be O(1)

---

If we sacrifice space complexity, we can improve the time complexity

## Hashmap

We traverse the array and when we encounter a value that does not exist in the hashmap, we add it to this. The time complexity will be O(n) and the space complexity will be O(n) since it could be as long as the length of the array (if there are no duplicates)

## JavaScript solutions

If we can use the JS specific data structures, would be to merge the two arrays in a new data structure and then use Set to find out if there are duplicates.
