'use strict';

let numsArr = [
  [1,2,3], // 0
  [4,5,6], // 1
  [7,8,9]  // 2
]
//12,15,18  
console.table(numsArr);
// 1st iteration
// 1 - numsArr[0][0]
// 4 - numsArr[1][0]
// 7 - numsArr[2][0]

// 2nd iteration
// 2 - numsArr[0][1]
// 5 - numsArr[1][1]
// 8 - numsArr[2][1]
//     numsArr[j][i]
for(let i = 0; i < numsArr.length; i++){ // slow loop
  let total = 0;
  for(let j = 0; j < numsArr.length; j++){ // fast loop
    total += numsArr[j][i]
  }
  console.log(total);
}
