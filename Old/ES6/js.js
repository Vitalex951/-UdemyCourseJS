 let name = 'Ivan',
    age = 30,
    mail = 'ex@mail.ru';


document.write(`Пользователю ${name}  ${age}  лет. Его почтовый адрес ${mail}`);

function makeArray() {
    var items = [];


    for (let i = 0; i < 10; i++) {
        var item = function () {
            console.log(i);
        };
        items.push(item);
    }


    return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();


let fun = () => {
    console.log(this);
};

/* fun(); */

let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let show = function() {
        console.log(this);
    };
    show();
});

function calcOrDoubnle(number, basis = 2) {
    // basis = basis || 2;
    console.log(number*basis);

}
calcOrDoubnle(2);


class Ren  {
    constructor(height, width = 10) {
        this.height = height;
        this.width = width;
    }

    calcAreal() {
         return this.height * this.width;
    }
}

const square = new Ren(20);

console.log(square.calcAreal());


let video = ['youtube', 'vimio', 'rutube'],
    blogs = ['wordpress', 'live', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'faccbook'];

console.log(internet);
console.log(internet[1]);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}
let numbers = [2, 5, 7];

log(...numbers);