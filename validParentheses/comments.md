This algorithm uses a stack to keep track of the opening parentheses.
We loop through the string characters, check against a hash map that stores the closeToOpen values, and

- if the character an opening parentheses, we add them to the stack
- if the character is a closing parentheses, we check that the topmost character in the stack is the corresponding opening parentheses. Also, we check if the stack is empty as a valid string cannot start with a closing parentheses

## Complexity

O(n) time complexity, because in the worst case scenario we are traversing all characters of the string

O(n) memory, because we are using a stack which could be potentially the length of the entire array if there are only open parentheses
