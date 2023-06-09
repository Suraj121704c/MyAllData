let longest = 0;
let S = "masai";

for (let i = 0; i < S.length; i++) {
  let bag = "";
  for (let j = i; j < S.length; j++) {
    bag = bag + S[j];

    let rev = "";
    for (let k = bag.length - 1; k >= 0; k--) {
      rev += bag[k];
    }
    if (bag == rev && bag.length > longest) {
      longest = bag.length;
    }
  }
}

console.log(longest);
