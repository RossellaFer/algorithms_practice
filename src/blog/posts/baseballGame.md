---
title: 22. Baseball game
description: Baseball game
date: 2023-03-11
tags:
  - algorithm
  - array
  - leetcode
  - hash map
---

### Task

<br />

You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

An integer x.
Record a new score of x.
'+'.
Record a new score that is the sum of the previous two scores.
'D'.
Record a new score that is the double of the previous score.
'C'.
Invalidate the previous score, removing it from the record.
Return the sum of all the scores on the record after applying all the operations.

<br />

[Leetcode problem link](https://leetcode.com/problems/baseball-game)

<br />

### Example:

<br />

```
Input: ops = ["5","2","C","D","+"]
Output: 30
Explanation:
"5" - Add 5 to the record, record is now [5].
"2" - Add 2 to the record, record is now [5, 2].
"C" - Invalidate and remove the previous score, record is now [5].
"D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
"+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.
```

<br />

### Comments

<br />

### Stack

<br />

The data structure to use here is a stack, as we need to keep track with the previous scores and removing or making operations on the last ones of the stack.

We need to keep in mind a few things:

- the integer is passed as a string, so we will need to convert it to a number
- the reduce function should have 0 passed as the optional parameter, since there can be cases where the array is empty (e.g. [1, 'C'])

<br />

<details>
  <summary>Click to view solution</summary>

```js
var calPoints = function (operations) {
  let finalScore = [];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "+") {
      let newScore =
        finalScore[finalScore.length - 2] + finalScore[finalScore.length - 1];
      finalScore.push(newScore);
    } else if (operations[i] === "C") {
      finalScore.pop();
    } else if (operations[i] === "D") {
      let newScore = 2 * finalScore[finalScore.length - 1];
      finalScore.push(newScore);
    } else {
      finalScore.push(Number(operations[i]));
    }
  }

  return finalScore.reduce((sum, num) => sum + num, 0);
};
```

</details>

<br />

The time complexity is O(n), since we are iterating through the operations. The iteration with reduce is also time complexity of O(n), but since we drop the constants, the final time complexity goes from O(n + m) to O(n).
The space complexity is also O(n), as we are storing the values in the stack.

<br />
