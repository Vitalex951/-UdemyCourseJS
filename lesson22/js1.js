// функция конструкторы
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("Helo " + this.name);
//     }
// }
// User.prototype.exit = function(name) {
//     console.log('Пользователь '+ this.name + ' ушел');
// }

// let Ivan = new User('Ivan', 25);
// let Alex = new User('Alex', 20);


// console.log(Ivan);
// console.log(Alex);

// Ivan.exit();




/* 'use strict';
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}

showThis(4, 5);
showThis(5, 5); */

/* let obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
        function shout() {
            console.log(this);
        }
        shout();
        
    }
};

obj.sum(); */

/* let user = {
    name: 'John'
};

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

console.log(sayName.call(user, 'Gushcha')); // можем передать обычную строку
console.log(sayName.apply(user, ['Smit'])); // здесь можно передать уже массива


function cunt(number) {
    return this*number;
}

let double = cunt.bind(2); // this становится в cunt 2
console.log(double(3));
console.log(double(10));
console.log(double(20)); */

/* 
let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
    function showThis() {
        console.log(this);
    }
    showThis()
}) */
// 1) Просто вызов функции - получем либо window / undefiend
// 2) Метод объекта - this = объекту
// 3) Конструктор (nrw) - this = новый созданный объект
// 4) Указания конкретного контекста - call, apply, bind