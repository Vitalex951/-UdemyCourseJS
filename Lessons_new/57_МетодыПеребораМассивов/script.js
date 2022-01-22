"use strict";

//filter

const names = ['ivan', 'vika', 'vital', 'viski'];

const shortNames = names.filter(name => {
  return name.length < 5;
});

console.log(shortNames);

// map

const answer = ['IvVAn', 'VVvVV', 'VsfsSFV'];

const res = answer.map(item => item.toLowerCase());

console.log(res);


// every/some

const some = [4, 4, 5];

console.log(some.every(item => typeof(item) === 'number'));

// reduce

const arr = [4, 5, 6, 7, 8];

const result = arr.reduce((sum, current) => sum + current, 3);

console.log(result);

const obj = {
  ivan: 'persone',
  ann: 'persone',
  cat: 'animal',
  dog: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);
les
console.log(newArr);