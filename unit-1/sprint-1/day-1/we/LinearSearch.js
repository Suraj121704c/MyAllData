let t = 5;
let n = [1, 2, 3, 4, 5, 6, 7, 8];

function LinearSeach(n,t) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] == t) {
      return i;
    }
  }
}

console.log(LinearSeach(n,t))