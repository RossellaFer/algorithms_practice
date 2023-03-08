---
title: 01. Arrays
description: Theory about arrays and common problems
date: 2023-01-04
tags:
  - data structures
  - arrays
---

<br />

Arrays are a way to store data contiguously.

<br />

In strictly typed languages, such as C++, Java or C#, arrays have to have an allocated size when initialized; loosely typed languages like JavaScript or Python do not have static arrays.

<br />

Dynamic arrays are resized automatically by the operating system. When inserting into an array, the operating system finds the next available slot and inserts the item into this slot. If there is no slot available (we are exceeding the array capacity), adding a new element is achieved by copying all elements of the first array into an array that is double its size, assign this to a new address in memory and removing the reference to the previous array in memory.

<br />

### Advantages

- Store multiple elements with a single variable name
- Accessing elements is fast as long as you have the index

### Disadvantages

- Addition and removal of elements in/from the middle of the array is slow because the rest of the elements need to be shifted to accommodate the new/missing element.

<br />

## Operations

<table class="notation_table">
  <tr>
    <th>Operation</th>
    <th>Complexity</th>
  </tr>
  <tr>
    <td>Read / write [i] element</td>
    <td>O(1)</td>
  </tr>
    <tr>
    <td>Insert / remove at the end</td>
    <td>O(1)</td>
  </tr>
    <tr>
    <td>Insert in the middle</td>
    <td>O(n)</td>
  </tr>
    <tr>
    <td>Remove in the middle</td>
    <td>O(n)</td>
  </tr>
</table>

<br />

## Techniques

- ### Sliding window

In a sliding window, the two pointers usually move in the same direction will never overtake each other.

This ensures that each value is only visited at most twice and the time complexity is still O(n)

- ### Two pointers

Two pointers is a more general version of sliding window where the pointers can cross each other and can be on different arrays.

<br />

[Two pointers exercises](/blog/tag/two-pointers/)

<br />

- ### Traversing from the right
- ### Sorting the array
- ### Index as a hash key
- ### Traversing the array more than once

<br />

## Sources

<br />

[Tech Interview handbook](https://www.techinterviewhandbook.org/algorithms/array/)

[Neetcode](https://neetcode.io/courses/dsa-for-beginners)

[Master the Coding Interview: Data Structures + Algorithms](https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/?LSNPUBID=PPkX79%2Fc*b0&ranEAID=PPkX79%2Fc*b0&ranMID=39197&ranSiteID=PPkX79_c.b0-FrYf6x50Gk.iAzMPXJT2Fg&utm_medium=udemyads&utm_source=aff-campaign)
