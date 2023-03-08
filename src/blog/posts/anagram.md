---
title: 20. Valid anagram
description: Valid anagram
date: 2023-03-08
tags:
  - algorithm
  - array
  - leetcode
  - hash map
---

### Task

<br />

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

<br />

[Leetcode problem link](https://leetcode.com/problems/valid-anagram/)

<br />

### Example:

<br />

```
Input: s = "anagram", t = "nagaram"
Output: true
```

<br />

```
Input: s = "rat", t = "car"
Output: false
```

<br />

### Comments

<br />

#### Hash map

<br />

Anagrams have the same letters in the same amount but in a different order, so it's natural to use a hash map to count the instances of the letters in the first string and then compare it with the second string.

<br />

<details>
  <summary>Click to view solution</summary>

```js
var isAnagram = function (s, t) {
  const isEqual = s.length === t.length;
  if (!isEqual) return false;

  let wordMap = {};

  for (let i = 0; i < s.length; i++) {
    let currentLetter = s[i];
    if (wordMap[currentLetter]) {
      wordMap[currentLetter] = wordMap[currentLetter] + 1;
    } else {
      wordMap[currentLetter] = 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    let currentLetter = t[j];
    if (wordMap[currentLetter] && wordMap[currentLetter] > 0) {
      wordMap[currentLetter]--;
    } else if (!wordMap[currentLetter]) {
      return false;
    }
  }

  return true;
};
```

</details>

<br />

Time Complexity: O(s + t)

<br />

Space Complexity: O(n)

Since we are storing the values in the hash map

<br />

#### Sorting

<br />

Another solution would be to sort both strings alphabetically and then compare them. If they are the same, it means that this is an anagram, otherwise they are different strings.

<br />

The time complexity would be worse though, since sorting takes O(log n), and its space complexity depends on how the sorting algorithm is natively implemented.

<br />

<details>
  <summary>Click to view solution</summary>

```js
var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};
```

</details>
