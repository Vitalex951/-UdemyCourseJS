"use strict";

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let x = 0;
  classPoints.forEach((item, i) => {
    x += item;
  });
 let y = x / classPoints.length;
 if (y < yourPoints) {
   return true;
 } else {
  return false;
 }
 
}
console.log(betterThanAverage([6, 1], 5));