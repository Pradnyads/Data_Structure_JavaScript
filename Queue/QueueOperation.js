const readlineSync = require("readline-sync");
let Queue = require("./Queue");

function queueOperations(userInput) {
  switch (parseInt(userInput)) {
    case 1:
      let lengthOfQueue = readlineSync.questionInt("what is size of queue- ");
      for (let j = 0; Queue.sizeofQueue() < lengthOfQueue; j++) {
        let element = readlineSync.question("Enter number to enqueue-");
        Queue.enqueue(parseInt(element));
        this.size++;
      }
      break;
    case 2:
      console.log("Dequeue the number from list");
      readlineSync.question(Queue.dequeue());
      break;
    case 3:
      console.log("Display queue");
      readlineSync.question(Queue.display());
      break;
    case 4:
      console.log("Exit");
      break;
    default:
      console.log("Wrong Choice");
      break;
  }
}
for (i = 0; i < 11; i++) {
  let userInput = readlineSync.question(
    "enter choice 1.enqueue 2.dequeque 3.display 4.exit :"
  );
  if (userInput == 4) {
    return;
  }
  console.log(queueOperations(parseInt(userInput)));
}
