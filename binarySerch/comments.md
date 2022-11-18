## Main takeways

Binary search only works if the data is sorted.

## Differences between linear search and binary search

With linear search, we iterate through every element of the data until we find what we are looking for. The time complexity for linear search is O(n), because in the worst case scenario, you need to iterate through all elements to find the target.

```
  var linearSearch = (list, item) => {
    for (let i = 0; i < list.length; i++) {
        if(list[i] === item) {
            return item;
        }
    }
    return null;
  }
```

With binary search, on the other hand, you look for the target as if you were looking for a word in the dictionary. You can almost reduce your list in half, because you know in which direction you need to search.

Pseudocode:

- create two variables to keep track of the first and last index of the list
- the main logic of the function will be in a while loop, that runs while the lowest index comes before the last index
- get the index right in the middle of the list, so that you can compare the value stored in the middle of the array with the target value
- if you find the target value, return the guess
- if the guess is too low, you update the lowest value accordingly, so that at the next iteration you can exclude the numbers that are too low
- if the value is too high, you update the highest value accordingly
- if you never find the value, return null

The Big O notation for the binary search is O(logn)
