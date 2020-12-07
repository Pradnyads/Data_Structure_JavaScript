class Stack {
  constructor() {
    this.arr = [];
    this.top = -1;
    this.size = 0;
  }
  push(num) {
    this.top = this.top + 1;
    this.arr[this.top] = num;
    this.size++;
  }
  sizeofStack() {
    return this.size;
  }
  pop() {
    if (this.top == 0) {
      console.log("Stack is under flow");
      return null;
    } else {
      this.size--;
      return this.arr[this.top--];
    }
  }
  display() {
    if (this.top > -1) {
      let str = " ";
      for (let i = 0; i < this.top + 1; i++) {
        str = str + this.arr[i] + " ";
      }
      console.log(str);
    }
  }
}
module.exports = new Stack();
