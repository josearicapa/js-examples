let array = [4523,8092,9419,8076];
array = [4602,8519,7585,8362];
array = [4523,8092,9419,8076];

const x1 = array[0];
const v1 = array[1];

const x2 = array[2];
const v2 = array[3];

let jumpX1 = x1;
let jumpX2 = x2;

let result = 'YES';

console.log(`${jumpX1} - ${jumpX2}`);

if(jumpX1 >= jumpX2){
  result = 'NO';
}
else{
  do {
    if (jumpX1 >= 100000 || jumpX2 >= 100000) {
      result = 'NO';
      break;
    }
  
    jumpX1 += v1;
    jumpX2 += v2;
    console.log(`${jumpX1} - ${jumpX2}`);
  } while (jumpX1 != jumpX2);
}



console.log(result);