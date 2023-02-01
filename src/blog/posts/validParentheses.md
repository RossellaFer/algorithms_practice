---
title: Valid parentheses
description: Valid parentheses algorithm question
date: 2023-01-31
tags:
  - Algorithm
  - Stack
  - Leetcode
---

### Task

<br />

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

<br />

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

<br />

### Examples:

<br />

**Example 1:**

Input: "()" //Output: true

**Example 2:**

Input: "()[]{}" //Output: true

**Example 3:**

Input: "(]" //Output: false

**Example 4:**

Input: "([)]" //Output: false

<br />

## Solution

<br/>

<details>
  <summary>Click to view solution</summary>

```js
const closeToOpen = {
  ")": "(",
  "]": "[",
  "}": "{",
};

var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let checkedChar = s[i];
    if (closeToOpen[checkedChar]) {
      if (stack && stack[0] === closeToOpen[checkedChar]) {
        stack.shift();
      } else {
        return false;
      }
    } else {
      stack.unshift(checkedChar);
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};
```

</details>

<br/>
<br />

## Explanation

This algorithm uses a stack to keep track of the opening parentheses.
We loop through the string characters, check against a hash map that stores the closeToOpen values, and

- if the character an opening parentheses, we add them to the stack
- if the character is a closing parentheses, we check that the topmost character in the stack is the corresponding opening parentheses. Also, we check if the stack is empty as a valid string cannot start with a closing parentheses

<br/>

## Complexity

<br />

- O(n) time complexity, because in the worst case scenario we are traversing all characters of the string
- O(n) memory, because we are using a stack which could be potentially the length of the entire array if there are only open parentheses
