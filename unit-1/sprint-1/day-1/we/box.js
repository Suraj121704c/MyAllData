function printBoxPattern(rows, columns) {
  for (let i = 0; i < rows; i++) {
    let pattern = "";
    for (let j = 0; j < columns; j++) {
      if (
        i === 0 ||
        i === rows - 1 ||
        j === 0 ||
        j === columns - 1 ||
        i === j - 1
      ) {
        pattern += "* ";
      } else {
        pattern += "  ";
      }
    }
    console.log(pattern);
  }
}

printBoxPattern(5, 7);
