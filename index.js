const arr = [
  [11, 2,4],
  [4, 5, 6],
  [10, 8, -12],
];

let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (i === j) {
      sum1 += arr[i][j];
    }
  }
}

const matrixReverse = arr.reverse();

for(let i = 0; i< matrixReverse.length; i++){  
  for (let j = 0; j < matrixReverse[i].length; j++) {
    if (i === j) {
      sum2 += matrixReverse[i][j];
    }
  }
}

console.log(sum1);
console.log(sum2);
console.log(Math.abs(sum1-sum2));
