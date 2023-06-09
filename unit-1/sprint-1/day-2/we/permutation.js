function permute(arr) {
  const result = [];

  function generate(n, arr) {
    if (n == 1) {
      result.push(arr.slice());
      return;
    }
    generate(n - 1, arr);

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 == 0) {
        swap(i, n - 1, arr);
      } else {
        swap(0, n - 1, arr);
      }
      generate(n - 1, arr);
    }
  }

  function swap(a, b, arr) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  generate(arr.length, arr);

  return result;
}

console.log(permute([1, 2, 3]));
