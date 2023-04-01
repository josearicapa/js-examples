const arr = [1, 2, 3, 4, 5];
let arraySum = [];

for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    if (j !== i) {
      sum += arr[j];
    }
  }
  arraySum.push(sum);
}

console.log(`${Math.min(...arraySum)} ${Math.max(...arraySum)}`)

