class Queue {
  constructor() {
    this.items = [];
    this.items.length == 0;
    this.size = 0;
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.items.length == 0) return "Underflow";
    return this.items.shift();
  }
  sizeofQueue() {
    return this.size;
  }
  display() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
}
module.exports = new Queue();
