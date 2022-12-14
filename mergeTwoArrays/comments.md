This problem requires us to add the elements from arr2 into arr1, therefore keeping the space complexity to O(1).

If we were, for example, to create a temporary array to hold the values, the space complexity would be O(n) making our algorithm not as efficient as it could be.

The idea behind merge two sorted arrays is to use the extra length of the nums1 array to allocate the largest value between the two arrays and continue like that until arr2 has no more elements.
We need two pointers/variables to keep track of the indices of each array (starting from m - 1 and n - 1), and one more pointer to keep track of where to insert the largest element in nums1.

Our while loop breaking condition will be arr2's index. When it reaches 0, the while loop breaks and we return arr1.
