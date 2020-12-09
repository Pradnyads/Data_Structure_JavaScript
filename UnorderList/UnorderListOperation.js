let readline = require("readline-sync");
let fs = require("fs");
let OrderList = require("../OrderList/OrderList");
let fileData = fs.readFileSync("./ReadUnorderList.txt");
let array = fileData.toString().split(' ');
console.log(array);

array.forEach((element) => {
  OrderList.addElement(element);
});

let display = OrderList.printList();
console.log(display);

fs.writeFileSync("./ReadUnorderList.txt", display);

let find = readline.question("Enter the Name you want to Delete or Add:");
let check = OrderList.searchElement(find);
if (check) {
  OrderList.delete(find);
} else {
  OrderList.addElement(find);
}

let displayFile = OrderList.showElement();
console.log(displayFile);

fs.writeFileSync("./ReadUnorderList.txt", displayFile.join(' '));
