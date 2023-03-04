---
title: 18. Merge Two Arrays
description: Merge two arrays
date: 2023-02-11
tags:
  - algorithm
  - array
  - leetcode
  - two pointers
---

### Task

<br />

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

<br />

### Example:

<br />

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

Output: [1,2,2,3,5,6]

Explanation: The arrays we are merging are [1,2,3] and [2,5,6].

The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

<br />
<br />

### Explanation:

<br />

This problem requires us to add the elements from arr2 into arr1, therefore keeping the space complexity to O(1).

If we were, for example, to create a temporary array to hold the values, the space complexity would be O(n) making our algorithm not as efficient as it could be.

<br />

The idea behind merge two sorted arrays is to use the extra length of the nums1 array to allocate the largest value between the two arrays and continue like that until arr2 has no more elements.
We need two pointers/variables to keep track of the indices of each array (starting from m - 1 and n - 1), and one more pointer to keep track of where to insert the largest element in nums1.

Our while loop breaking condition will be arr2's index. When it reaches 0, the while loop breaks and we return arr1.

<br />

### Code

<br />

### Solution

<br />

<details>
  <summary>Click to view solution</summary>

```js
function merge(arr1, m, arr2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;

  while (second >= 0) {
    let fVal = arr1[first];
    let sVal = arr2[second];

    if (fVal > sVal) {
      arr1[i] = fVal;
      i--;
      first--;
    } else {
      arr1[i] = sVal;
      i--;
      second--;
    }
  }
}

mergeSort([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
```

</details>

<br />

### Solution with extra space

<br />

<details>
  <summary>Click to view solution</summary>

```js
function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  while (arr1Item || arr2Item) {
    //checking if the last items of arr2 are not undefined
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
```

</details>

<br />
