---
title: 01. Two Sum
description: Two sum algorithm question
date: 2023-31-01
tags:
  - algorithm
  - array
  - leetcode
---

### Task

<br />

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

<br />

### Example:

<br />

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

<br />
<br />

### Explanation:

<br />

<figure>
<img class="blogPostImage" src="../assets/images/twoSum.png">
<figcaption><b>Source: Neetcode</b></figcaption>
</figure>

<br />
<br />

### What to consider:

<br />

Questions about inputs:

- Is it a sorted array?
- Are all the elements of the array integers? Could they be negative?
- Can the same number be repeated?

Questions about outputs:

- Is the output a boolean or should I be returning the indices of the found numbers?
- Is there only one combination of elements that summed up are equal to the target?

Questions about the value of the problem:

- What’s the main goal, space or time?
- Are there any constraints in using extra space?

<br />
<br />

### Code

<br />

### Brute force solution

<br />

<details>
  <summary>Click to view solution</summary>

```js
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
};

twoSum([2, 7, 11, 15], 9);
```

</details>

<br />

### Optimized solution using hash map to hold values

<br />

<details>
  <summary>Click to view solution</summary>

```js
var twoSum = function (nums, target) {
  // the purpose of the object is to store the numbers we have seen and the indexes they appear at
  const seenNums = {};
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    // amount needed to add to the current number to get to the target
    // if the number has already been added to the object,
    //return its index (saved in the object) and the current index
    if (seenNums[target - n] !== undefined) {
      return [seenNums[target - n], i];
    }
    // if the number has not been seen yet, add it to the object
    seenNums[n] = i;
  }
  return [];
};

twoSum([2, 7, 11, 15], 9);
```

</details>

<br />

## Complexity

<br />

### Brute force solution

- O(n2) time complexity, because we have a nested for loop
- O(1) memory, as we are not using any other variable to hold the data

### Hash map solution

- O(n) time complexity, since we are traversing the array once
- O(n) space complexity, as we are potentially storing all values of the array in the hash map (if no corresponding values are found)
