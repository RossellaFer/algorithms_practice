---
title: 23. Reshaping the matrix
description: Reshaping the matrix
date: 2023-03-01
tags:
  - algorithm
  - array
  - leetcode
---

### Task

<br />

In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

<br />

[Leetcode problem link](https://leetcode.com/problems/reshape-the-matrix)

<br />

### Example:

<br />

```
Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]
```

<br />

```
Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]
```

<br />

### Comments

<br />

The first check we need to do is comparing the number of elements of the mat parameter to the number of elements expected in the reshaped matrix. We do this by multiplying the length of the mat parameter times the length of the first element of the matrix.

<br />

If the length is not the same, it means that the matrix cannot be reshaped. If it's the same, we create an array variable that can hold all the values of the mat array in the correct order (populated by looping over all the columns of the initial array), and then an empty reshaped matrix, with the final structure indicated by the parameters r and c passed in the function.

<br />

This is populated using Array.from and .map

<br />

Once we have the elements in the correct order in arr, we start populating the reshaped matrix from the last element, removing these elements from the arr as we go on.

<br />

Time complexity : O(r*c)
Space complexity : O(r*c)

<br />

<details>
  <summary>Click to view solution</summary>

```js
var matrixReshape = function (mat, r, c) {
  //find out if they fit in the new matrix
  let currentRows = mat.length;
  let currentColumns = mat[0].length;
  let arr = [];
  let reshapedMatrix = new Array(r).fill(0).map((el) => new Array(c).fill(0));

  if (currentRows * currentColumns !== r * c) {
    return mat;
  }

  for (let i = 0; i < currentRows; i++) {
    for (let j = 0; j < currentColumns; j++) {
      arr.push(mat[i][j]);
    }
  }

  for (let i = r - 1; i >= 0; i--) {
    for (let j = c - 1; j >= 0; j--) {
      reshapedMatrix[i][j] = arr.pop();
    }
  }

  return reshapedMatrix;
};
```

</details>
