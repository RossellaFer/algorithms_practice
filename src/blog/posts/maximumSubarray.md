---
title: 10. Maximum subarray
description: Maximum subarray Leetcode exercise
date: 2023-02-21
tags:
  - algorithm
  - array
  - leetcode
---

### Task

<br />

Given an integer array nums, find the subarray with the largest sum, and return its sum.

<br />

[Leetcode problem link](https://leetcode.com/problems/maximum-subarray/?envType=study-plan&id=data-structure-i)

<br />

### Example:

<br />

```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
```

```
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
```

<br />
<br />

### Comments

<br />

- Contiguous subarray means that all of the elements of the subarray have consecutive indexes

<br />

#### Brute force

<br />

We can calculate the sum of every single subarray, which would be very inefficient as it would have time complexity of O(n²) and space complexity of O(1)

<br />

#### Kadane’s Algorithm

<br />

We need a max variable to keep track of the maximum sum. We can initialize the maxSum as the first element of the array, as in itself this is a subarray.

Starting from the second element of the array, we would traverse it and calculate the sum of every possible subarray ending with the element nums[i + n].

When the next element of the array is greater than the sum of the prev subarray with current element (runningSum = Math.max(runningSum + nums[i], nums[i]), we change the beginning of the subarray, starting from the current element.

<br />

### Solution

<br />

<details>
  <summary>Click to view solution</summary>

```js
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let runningSum = 0;

  for (let i = 1; i < nums.length; i++) {
    runningSum = Math.max(runningSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, runningSum);
  }

  return maxSum;
};
```

</details>

<br />

<figure>
<img class="blogPostImage" src="../assets/images/maximumSubarray.png">
<figcaption><b><a href="https://javascript.plainenglish.io/javascript-algorithms-maximum-subarray-leetcode-15812b95bc4" target="_blank">Source: Medium - Roman Melnik</a></b></figcaption>
</figure>
