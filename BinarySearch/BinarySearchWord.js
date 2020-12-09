const readlineSync = require("readLine-Sync");

function binarySearch(array, object) {
  let start = 0;
  let end = array.length + 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (array[middle] === object) {
      return middle;
    } else if (array[middle] < object) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

array = new Array();

let lengthArray = readlineSync.question("Enter the length of array : ");
for (let i = 0; i < lengthArray; i++) {
  let word = readlineSync.question("Enter Words in list : ");
  array.push(word);
}
object = readlineSync.question("Enter word to be searched : ");

console.log("Word is at posotion : " + binarySearch(array, object));
