class Stack {
    constructor() {
      this.array = [];
    }
    peek() {
      return this.array[this.array.length - 1];
    }
    push(value) {
      this.array.push(value)
      return this;
    }
    pop() {
      this.array.pop();
      return this;
    }
    //isEmpty
  }
  
  const myStack = new Stack();
  myStack.push('google');
  myStack.peek();
  myStack.push('udemy');
  myStack.push('discord');
  myStack.pop();
  
  console.log(myStack);
  
  