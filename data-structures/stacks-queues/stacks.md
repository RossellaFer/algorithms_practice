## Stacks

Stacks is a linear data structure that follows a particular order in which the operations are performed.
The order is LIFO (last in first out), because the last item that comes in is the first item that comes out.

### Uses

- used in language-specific language (like JavaScript engine)
- when functions get called, they usually follow the stack model
- browser history
- undo/redo functionality when writing text
- call logs

Lookup = O(n)
pop = O(1)
push = O(1)
peek = O(1)

### Implementation of stacks in JavaScript

Stacks are not native in JavaScript. They can be implemented using linked lists and arrays and you need to think about what sorts of operations you might need and choose how to implement them.

#### Arrays

Arrays allow cache locality, which makes it faster to access its items as they are stored in consecutive memory

#### Linked list

Linked lists have extra memory associated to it as we need to use pointers to the next item (or also to the previous if using doubly linked lists).
An advantage is that they have dynamic memory, so they can shrink and grow at runtime by allocating and deallocating memory.
