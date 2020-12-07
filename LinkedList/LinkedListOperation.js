const readlineSync = require("readline-sync");
let list = require("./LinkedList");

function linklistOperations(userInput) {
  switch (userInput) {
    case 1:
      let lengthOflist = readlineSync.questionInt("what is size of list- ");
      while (list.sizeofLinklist() < lengthOflist) {
        let element = readlineSync.question("Enter number to add-");
        list.add(parseInt(element));
        this.size++;
      }
      break;
    case 2:
      console.log("Search the number from Linklist-");
      let indexEle = readlineSync.question("Enter value to search :");
      readlineSync.question(list.search(indexEle));
      break;
    case 3:
      console.log("Display Linklist");
      readlineSync.question(list.display());
      break;
    case 4:
      console.log("Delete the element in Linklist");
      let value = readlineSync.question("Enter index of value to delete:");
      console.log(list.delete(value));
      break;
    case 5:
      console.log("Exit");
      break;
    default:
      console.log("Wrong choice");
      break;
  }
}
for (i = 0; i < 11; i++) {
  let userInput = readlineSync.question(
    "enter choice 1.add 2.search 3.display 4.delete 5.exit:"
  );
  if (userInput == 5) {
    return;
  }
  console.log(linklistOperations(parseInt(userInput)));
}
