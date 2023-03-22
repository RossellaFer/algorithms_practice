---
title: 14. Intersection of two arrays
description: Intersection of Two Arrays II
date: 2023-02-25
tags:
  - algorithm
  - array
  - leetcode
  - two pointers
  - hash map
---

### Task

<br />

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

<br />

[Leetcode problem link](https://leetcode.com/problems/intersection-of-two-arrays-ii)

<br />

### Example:

<br />

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
```

```
Input: nums1 = [3,1,2], nums2 = [1,1]
Output: [1]
```

<br />
<br />

### Comments

<br />

There are many approaches to solve this problem:

- brute force nested for loop
- sorting and two pointers
- hash map

<br />

#### Brute force

<br />

The brute force solution uses a nested loop to get the intersection of the two arrays. For each element in nums1, we would perform a search in nums2 and keep on adding common elements to the list.

By leveraging JS methods, we can filter the first array and return the values also included in the second array.

<br />

<details>
  <summary>Click to view solution</summary>

```js
var intersect = function (nums1, nums2) {
  return nums1.filter((el) => {
    return nums2.includes(el);
  });
};
```

</details>

<br />

The time complexity for this would be O(n\*m), but the space consumption is O(1)

<br />

#### Sorting and two pointers

<br />

If the two arrays were sorted, it would be easier to compare the values in order using two pointers.
We initialize the pointers to 0 and then move both of them by 1 if the values are the same, as well as pushing the intersection value to a new array.
If the numbers indicated by the pointers are different, we would move by 1 the pointer that has the lowest value, since we are traversing the arrays from the left.

<br />

### Solution

<br />

<details>
  <summary>Click to view solution</summary>

```js
var intersect = function (nums1, nums2) {
  let intersection = [];

  let sorted1 = nums1.sort((a, b) => a - b);
  let sorted2 = nums2.sort((a, b) => a - b);

  let first = 0;
  let second = 0;

  while (first < sorted1.length && second < sorted2.length) {
    if (sorted1[first] === sorted2[second]) {
      intersection.push(sorted1[first]);
      first++;
      second++;
    } else {
      if (sorted1[first] < sorted2[second]) {
        first++;
      } else {
        second++;
      }
    }
  }
  return intersection;
};
```

</details>

<br />

#### Hash table

<br />

Another approach is to insert all elements of one of the arrays in a hash table and search each element of the other array. If the element is in the hash table, we add it to the intersection list.

The time complexity of inserting the elements of nums1 in the hash table is O(m + n), where m and n are the length of the two arrays. Space complexity will be O(n), for storing the values in the hash table

<br />

<details>
  <summary>Click to view solution</summary>

```js
var intersect = function (nums1, nums2) {
  let intersection = [];
  let hash = {};

  nums1.forEach((el) => (hash[el] = hash[el] ? hash[el] + 1 : 1));

  for (let i = 0; i < nums2.length; i++) {
    let current = nums2[i];
    if (hash[current] && hash[current] != 0) {
      intersection.push(current);
      hash[current] = hash[current] - 1;
    }
  }
  return intersection;
};
```

</details>

<br />
