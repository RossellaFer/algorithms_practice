## Brute force

Comparing the first number with all the others in the array, then move to the second one and so on. The time complexity will be O(n2), but we won't need any extra space so it will be O(1).

## Sorting

Sorting the array first and then comparing each value with the one next to it would allow us to iterate through the array only once. The time complexity for this is O(n log n), since we need O(log n) to sort and then O(n) to traverse the array once. Space complexity will be O(1)

---

If we sacrifice space complexity, we can improve the time complexity

## Hashmap

We traverse the array and when we encounter a value that does not exist in the hashmap, we add it to this. The time complexity will be O(n) and the space complexity will be O(n) since it could be as long as the length of the array (if there are no duplicates)

## JavaScript solutions

Using Map instead of an object could be faster
