let arr = [2, 3, 1, 4, -5, -10, 1];
console.log(quickSort(arr));

// it don't work for less then 2 elements in array
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  // we are taking last element you can take any element from the array
  let pivot = arr[arr.length - 1];
  let right = [];
  let left = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
