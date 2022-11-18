The quicksort algorithm uses the divide and conquer strategy, which consists in <mark>finding the base case</mark> (the simplest case) and then applying that solution to the more complex cases.

In the case of sorting an array of numbers, the base case will be an empty array or an array with just one element. In this case, you just return the array because there is nothing to sort.

The next case is an array with two elements. You check if the first element is smaller than the second one. If it isn't, you swap them.

For arrays with 3 elements, you will need to pick a pivot, and using this you find the elements that are smaller and larger than the pivot - this will allow you to partition your array in [...smallerThanPivot], pivot, [...largerThanPivot]

Then you move on to sorting the parts, by calling quicksort recursively on these arrays.

## Complexities

The performance of quicksort depends on the pivot you choose.
In the best case scenario (where you pick a good pivot), the time complexity is O(n log(n)).

In the worst case scenario, the time complexity is O(n^2), because you touch every element of each level of the call stack: O(n) \* O(n) = O(n^2)

Execution memory is used for quicksort, while the space is 1
