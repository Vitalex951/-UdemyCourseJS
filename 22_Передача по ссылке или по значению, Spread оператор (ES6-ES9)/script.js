// Копирование массива
// Поверхостная копия, изменять можно только первые уровни массива
// 1 метод
function copy(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;

}

const numbers = {
    a: 5,
    b: 6,
    c: 7,
    d: {
        x: 10,
        y: 15
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 16;
console.log(newNumbers);
console.log(numbers);


//2 метод Глобальный метод 

const add = {
    d: 17,
    i: 20
};

const clone = Object.assign({}, add);

clone.d = 20;
console.log(add);
console.log(clone);

// 3 меттод через slice
const oldaArray = ['a', 'b', 'c'];
const newArray = oldaArray.slice();

newArray[1]= 'xxx';

console.log(newArray);
console.log(oldaArray);


// 4 метод использования оператора разворота

const video = ['ютюб', 'вимео', 'рютюб'],
    blogs = ['word', 'live', 'blogger'],
    interner = [...video, ...blogs, 'vk', 'facce'];
    console.log(interner);

    function log(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
    }
    const num = [2, 5, 7];
    log(...num);

const array = ['a', 'b', 'c'];

const newAarray = [...array];
const q = {
    one: 1,
    two: 2,
};

const newObj = {...q};

console.log(newObj);
console.log(newAarray);