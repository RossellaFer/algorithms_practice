---
title: 12. Remove Element
description: Remove Element
date: 2023-03-06
tags:
  - algorithm
  - array
  - leetcode
  - two pointers
---

### Task

<br />

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

<br />

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

<br />

Return k after placing the final result in the first k slots of nums.

<br />

[Leetcode problem link](https://leetcode.com/problems/remove-element/description/)

<br />

### Example:

<br />

```
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

<br />
<br />

### Comments

<br />

#### Two pointers

<br />

This solution uses the two pointers approach. What we want to do is move all the values that are NOT val to the beginnning of the array, and similarly to [Remove duplicates](), we want to use a left pointer to keep track of where we should insert these elements.

<br />

If we encounter our val, we do nothing. The exercise requires you to return the k elements after removing the duplicates. In this case, k will be the number of elements.
The solution also works if there are no numbers to remove at all, as the algorithm will swap each number with itself.

<br />

<details>
  <summary>Click to view solution</summary>

```js
var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
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
