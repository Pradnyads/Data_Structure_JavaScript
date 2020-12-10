const readlineSync = require("readLine-Sync");
let Search = require("./BinarySearchWord");
 
array = new Array();
let lengthArray = readlineSync.question("Enter the length of array : ");
for (let i = 0; i < lengthArray; i++) {
  let word = readlineSync.question("Enter Words in list : ");
  array.push(word);
}
object = readlineSync.question("Enter word to be searched : ");

console.log("Word is at posotion : " + Search.binarySearch(array,object));
