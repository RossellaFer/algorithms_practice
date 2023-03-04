---
title: 11. Remove Duplicates from a sorted array
description: Remove Duplicates from a sorted array
date: 2023-03-04
tags:
  - algorithm
  - array
  - leetcode
  - two pointers
---

### Task

<br />

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

<br />

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

<br />

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

<br />

[Leetcode problem link](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

<br />

### Example:

<br />

```
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

<br />
<br />

### Comments

<br />

#### Two pointers

<br />

This solution uses the two pointers approach. We are traversing the array from index 1 and keeping track of the index of the new unique value in the leftIdx variable.
We start from 1 since the first value will always remain there (since it's unique and it's definitely the first time we encounter it)

<br />

When we encounter a new unique value (checked by comparing wiht the element at the previous index), we move it to the position at index leftIdx, and only then increment leftIdx by 1.
The for loop handles the increment of the other pointer.

<br />

We don't care about swapping the two values, but only to assign the element at position leftIdx with the unique value.

<br />

<details>
  <summary>Click to view solution</summary>

```js
var removeDuplicates = function (nums) {
  if (nums.length < 2) return nums;

  let leftPointer = 1;

  for (let i = 1; i < nums.length; i++) {
    let previous = nums[i - 1];
    let current = nums[i];
    if (previous !== current) {
      nums[leftPointer] = nums[i];
      leftPointer++;
    }
  }

  return leftPointer;
};
```

</details>

<br />

Time Complexity: O(n)

Since we only have 2 pointers, and both the pointers will traverse the array at most once.

<br />

Space Complexity: O(1)

Since we are not using any extra space.

<br />

#### Function using array destructuring

<br />

<details>
  <summary>Click to view solution</summary>

```js
var removeDuplicates = function (nums) {
  let [left, right] = [0, 0];

  while (right < nums.length) {
    const [leftVal, rightVal] = [nums[left], nums[right]];

    const isEqual = rigthVal === leftVal;

    if (!isEqual) {
      left++;
      nums[left] = rightVal;
    }

    right++;
  }

  return left + 1;
};
```

</details>
