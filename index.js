const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let sum1 = 0;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (i === j) {
      sum1 += matrix[i][j];
    }
  }
}

console.log(sum1);
