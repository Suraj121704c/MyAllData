// only works with sorted arrays

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Target found, return the index
      } else if (arr[mid] < target) {
        left = mid + 1; // Target is in the right half
      } else {
        right = mid - 1; // Target is in the left half
      }
    }
  
    return -1; // Target not found
  }
  
  // Example usage:
  const sortedArray = [2, 4, 7, 10, 14, 20, 25, 30];
  const targetValue = 14;
  
  const index = binarySearch(sortedArray, targetValue);
  
  if (index !== -1) {
    console.log("Target found at index", index);
  } else {
    console.log("Target not found in the array");
  }