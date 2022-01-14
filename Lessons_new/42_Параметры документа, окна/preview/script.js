'use strict';

const box = document.querySelector('.box'),
       bnt = document.querySelector('button');

const width = box.scrollWidth;
const height = box.scrollHeight;


console.log(box.scrollTop);

bnt.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';

    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);
console.log(style.display);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);
window.scrollBy(0 , 30);    
window.scrollTo(0 , 30);    