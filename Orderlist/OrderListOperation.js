let readline = require("readline-sync");
let fs = require("fs");
let OrderList = require("./OrderList");
let fileData = fs.readFileSync("./ReadOrderList.txt");
let array = fileData.toString().split(' ');
console.log(array);

array.forEach((element) => {
  OrderList.sortList(parseInt(element));
});

let display = OrderList.printList();
console.log(display);

fs.writeFileSync("./WriteOrderList.txt", display);

let find = readline.question("Enter the number you want to delete :");
let check = OrderList.searchElement(find);
if (check) {
  OrderList.delete(find);
} else {
  OrderList.sortList(find);
}

let displayFile = OrderList.showElement();
console.log(displayFile);

fs.writeFileSync("./WriteOrderList.txt", displayFile);
