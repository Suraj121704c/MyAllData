function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToSort = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToSort) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToSort;
  }
}
let arr = [2, 3, 1, 4, -5, -10, 1];
insertionSort(arr);
console.log(arr);
