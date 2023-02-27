---
title: 12. Best Time to Buy and Sell Stock
description: Best Time to Buy and Sell Stock
date: 2023-02-27
tags:
  - algorithm
  - array
  - leetcode
  - two pointers
---

### Task

<br />

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

<br />

[Leetcode problem link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock)

<br />

### Example:

<br />

```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

<br />
<br />

### Comments

<br />

#### Sorting

<br />

By using two pointers we can keep track of the buy and sell prices and find out if their difference is profitable.

If it is, then we compare it with the maximum profit we have until now and assign to the maxProfit the largest value. If it's not profitable, it means that we need to update the left pointer to the right pointer, since before then we are not making a profit.

The time complexity for this solution is O(n) as we are iterating only once, while the space complexity is O(1).

<br />

<details>
  <summary>Click to view solution</summary>

```js
var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      left = right;
    }
    right++;
  }

  return maxProfit;
};
```

## </details>

<br />
<figure>
<img style="max-width: 400px;" class="blogPostImage" src="../assets/images/best time to sell stock.jpg">
<figcaption><b>Visual representation</b></figcaption>
</figure>
