## Queues

A Queue is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order. We define a queue to be a list in which all additions to the list are made at one end, and all deletions from the list are made at the other end.

### Uses

- apps where you queue to buy or wait for things (concert tickets, uber)
- printers
- memory management
- applied on WhatsApp when we send messages to our friends and they don’t have an internet connection then these messages are queued on the server of WhatsApp.

### Operations

Lookup = O(n)

enqueue = O(1)

dequeue = O(1)

peek = O(1)

### Implementation of queues in JavaScript

Queues are not native in JavaScript. They can be implemented using linked lists. Arrays could also be used, but they are really inefficient, as to dequeue we would need to shift all indexes when removing from the top.

#### Linked list

Linked lists have extra memory associated to it as we need to use pointers to the next item (or also to the previous if using doubly linked lists).
An advantage is that they have dynamic memory, so they can shrink and grow at runtime by allocating and deallocating memory.

#### Stacks

One of the most common interview questions is to build a queue data structure using two stacks. Solution [here](../../implementQueuesUsingStacks)
