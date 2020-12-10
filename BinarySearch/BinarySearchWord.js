class Search {
  constructor() {
    this.array = [];
  }
  binarySearch() {
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
}
module.exports = new Search;
