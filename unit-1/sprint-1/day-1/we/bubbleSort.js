// poor algorithm never been used in real world

// swapping happens untill totally swapped

let arr = [2, 3, 1, 4, -5, -10, 1];
bubbleSort(arr);
console.log(arr)

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
