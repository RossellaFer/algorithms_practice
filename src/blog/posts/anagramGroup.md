---
title: 21. Group anagrams
description: Valid anagram
date: 2023-03-09
tags:
  - algorithm
  - array
  - leetcode
  - hash map
---

### Task

<br />

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

<br />

[Leetcode problem link](https://leetcode.com/problems/group-anagrams/)

<br />

### Example:

<br />

```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

<br />

```
Input: strs = [""]
Output: [[""]]
```

<br />

### Comments

<br />

This algorithms can be solved by reducing each string to the letters it is composed of and then connecting each set of letters with the strings that contain exactly those letters. The data structure that can do that is a hash map.

<br />

There are two approaches:

- sorting the letters in each string before adding it to the hash map, so that they can be grouped together
- using an array composed of the 26 letters between a-z and count the occurrences of each letter, then mapping the hash using this array

<br />

### Sorting solution

<br />

<details>
  <summary>Click to view solution</summary>

```js
var groupAnagrams = function (strs) {
  let hash = {};

  strs.forEach((str) => {
    const letters = str.split("").sort();

    hash[letters] ? hash[letters].push(str) : (hash[letters] = [str]);
  });

  return Object.values(hash);
};
```

</details>

<br />

Time Complexity: O(log n \* m)

Where m is the average length of the strings

<br />

Space Complexity: O(n)

<br />

### Mapping character count of each string

<br />

<details>
  <summary>Click to view solution</summary>

```js
var groupAnagrams = function (strs) {
  let hash = {};

  strs.forEach((str) => {
    let count = new Array(26).fill(0);

    // 97 is the numeric value of the character 'a', so if you subtract 97 from a character between 'a' and 'z', you are mapping that character to an index of your array between 0 and 25
    for (let char of str) count[char.charCodeAt() - 97]++;
    let key = count.join("#");
    hash[key] ? hash[key].push(str) : (hash[key] = [str]);
  });

  return Object.values(hash);
};
```

</details>

<br />

Time Complexity: O(m \* n)

Where m is the total number of strings that we are given and n is the average length of a string

<br />

Space Complexity: O(n)

<br />
