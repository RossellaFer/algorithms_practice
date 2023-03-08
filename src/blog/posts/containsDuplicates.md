---
title: 13. Contains Duplicates
description: Contains Duplicates
date: 2023-02-19
tags:
  - algorithm
  - array
  - leetcode
---

### Task

<br />

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

<br />

[Leetcode problem link](https://leetcode.com/problems/contains-duplicate/)

<br />

### Example:

<br />

Input: nums = [1,2,3,1] --> Output: true

Input: nums = [1,2,3,4] --> Output: false

<br />
<br />

### Comments

<br />

#### Brute force

<br />

Comparing the first number with all the others in the array, then move to the second one and so on. The time complexity will be O(n2), but we won't need any extra space so it will be O(1).

<br />

#### Sorting

<br />

Sorting the array first and then comparing each value with the one next to it would allow us to iterate through the array only once. The time complexity for this is O(n log n), since we need O(log n) to sort and then O(n) to traverse the array once. Space complexity will be O(1)

<br />

<details>
  <summary>Click to view solution</summary>

```js
var containsDuplicate = (nums) => {
  const sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] == sorted[i + 1]) {
      return true;
    }
  }
  return false;
};
```

## </details>

<br />

---

_If we sacrifice space complexity, we can improve the time complexity_

<br />

#### Hashmap

<br />

We traverse the array and when we encounter a value that does not exist in the hashmap, we add it to this. The time complexity will be O(n) and the space complexity will be O(n) since it could be as long as the length of the array (if there are no duplicates)

<br />

### Solution

<br />

<details>
  <summary>Click to view solution</summary>

```js
var containsDuplicate = function (nums) {
  const encounteredNums = {};

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (encounteredNums[n] !== undefined) {
      return true;
    }
    encounteredNums[n] = i;
  }
  return false;
};
```

</details>

<br />

#### JavaScript-specific solutions

<br />

Using Map instead of an object could be faster

<br />

<details>
  <summary>Click to view solution</summary>

```js
var containsDuplicate = function (nums) {
  const set = new Set(nums);
  return nums.length !== set.size;
};
```

</details>

<br />
