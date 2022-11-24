This solution uses the two pointers approach. We are traversing the array from index 1 and keeping track of the index of the new unique value in the leftIdx variable.

When we encounter a new unique value (checked by comparing wiht the element at the previous index), we move it to the position at index leftIdx, and only then increment leftIdx by 1.
The for loop handles the increment of the other pointer.

We don't care about swapping the two values, but only to assign the element at position leftIdx with the unique value.

Time Complexity: O(n), since we only have 2 pointers, and both the pointers will traverse the array at most once.

Space Complexity: O(1), since we are not using any extra space.
