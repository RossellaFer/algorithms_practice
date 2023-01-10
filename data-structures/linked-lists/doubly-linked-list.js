// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        prev: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
  
      const newNode = new Node(value);
  
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
      return this;
    }
  
    prepend(value) {
      const newNode = new Node(value);
  
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
      return this;
    }
  
    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return array;
    }
  
    insert(index, value) {
      if(index >= this.length) {
        return this.append(value);
      }
      const newNode = new Node(value);
      const leader = this.traverse(index - 1);
      const follower = leader.next;
  
      leader.next = newNode;
      newNode.prev = leader;
      newNode.next = follower;
      follower.prev = newNode;
      
      this.length++;
      return this;
    }
  
    traverse(index) {
      let counter = 0;
      let currentNode = this.head;
  
      while(counter != index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
  
    remove(index) {
      if(index >= this.length) {
        return this;
      }
  
      const leader = this.traverse(index - 1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
  
      return this;
    }
  }
  
  let myLinkedList = new DoublyLinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  console.log(myLinkedList.printList());
  myLinkedList.insert(2, 99);
  console.log(myLinkedList.printList());
  myLinkedList.remove(1);
  console.log(myLinkedList.printList());
  
  
  
  
  