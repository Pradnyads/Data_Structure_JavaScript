const readlineSync = require("readline-sync");
let Stack = require("./Stack");

function stackOperations(userInput) {
  switch (parseInt(userInput)) {
    case 1:
      let lengthOfStack = readlineSync.questionInt("what is size of stack:");
      while (Stack.sizeofStack() < lengthOfStack) {
        let num = readlineSync.question("Enter number to push:");
        Stack.push(parseInt(num));
        this.size++;
      }
      break;
    case 2:
      console.log("Pop the number from stack");
      readlineSync.question(Stack.pop());
      break;
    case 3:
      console.log("Display stack");
      readlineSync.question(Stack.display());
      break;
    case 4:
      console.log("Exit");
      break;
    default:
      console.log("Wrong Choice");
      break;
  }
}
for (i = 1; i < 11; i++) {
  let userInput = readlineSync.question(
    "enter choice : 1.push 2.pop 3.display 4.exit:"
  );
  if (userInput == 4) {
    return;
  }
  console.log(stackOperations(parseInt(userInput)));
}
