/*  let Name = prompt("Как тебя зовут?");
alert (`Тебя зовут ${Name}`); 

 let name = prompt("Ваше имя?", "");
alert(name); 

 console.log("0"); 

 let questain = +prompt("ВВедите любое число");

 if (questain > 0) {
     alert(1);
 } else if (questain < 0) {
     alert(-1);
 } else {
     alert(0);
 };

 

 let message = (age < 3) ? 'Здравствуй, малыш!' :
 (age < 18) ? 'Привет!' :
 (age < 100) ? 'Здравствуйте!' :
 'Какой необычный возраст!';


 let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
} */
 


/* let hour = 15;
let minute = 30;

if (hour == 11 || minute == 33) {
  console.log(hour);
  console.log(minute);
} */


// проверка логина

 /* let userName = prompt("Введите Логин");

if (userName == "Админ" ) {
  let passUser = prompt("Введите пароль");
    if (passUser == "Я главный") {
      alert("Здравстуйсте");
    } else if (passUser == "" || passUser == null  ) {
      alert("Отменено");
    } else {
      alert("Неверный пароль");
    } 

  } else if (userName == "" || userName == null) {
    alert("Отменено");
  } else {
    alert("Я вас не знаю")
  }
 */

  /* let userName = prompt("Кто там?", '');

if (userName == 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass == 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass == '' || pass == null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName == '' || userName == null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
} */

// nul ???

/* let firstName = null;
let lastName = null;
let nickName = null; */

// показывает первое определённое значение:
/* alert(firstName ?? lastName ?? nickName ?? "Аноним");  */// Суперкодер


// While и For

/* let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
  alert( i );
  i++;
}
 */
/* for (let i = 0; i < 10; i++) {

  // если true, пропустить оставшуюся часть тела цикла
  if (i % 2 == 0) continue;

  alert(i); // 1, затем 3, 5, 7, 9
} */



/* switch (num) {
  case num < 49:
      console.log("Неверно");
      break;
  case num > 100:
      console.log("Много");
      break;
  case num > 80:
      console.log("Все еще много");
      break;
  case num = 50:
      console.log("Верно");
      break;
  default:
      console.log("Что-то пошло не так");
      break;
    }
 */

/* while (num < 55) {
  console.log(num);
  num++;
} */

/* console.log("яжик" > "яблоко"); */

//Функции


/* let num = 10;
function showFirstMessage(text) {
  alert(text);
  let num = 20;
  console.log(num);
}

showFirstMessage("Hello");
console.log(num); */

/* let calc = function (a,b) {
  return (a+b);
} */
/* let calc = (a,b) => a+b
console.log(calc(3,4));

console.log(calc(8,4));

function reutVar() {
  let num = 50;
  return num;
}

let anotherNum = reutVar();
console.log(anotherNum);

let str = "test";

console.log(str.length);

console.log(str.toUpperCase()); // все заглавные
console.log(str.toLowerCase()); // все маленькие буквы

let twelve = "12.2px"; */

/* console.log(Math.round(twelve)); */
/* console.log(parseInt(twelve));
console.log(parseFloat(twelve)); */

/* let a = 3;
 function addTwo(x) {
 let ret = x + 2
 return ret
}
let b = addTwo(a)
console.log(b);
console.log(b);

let val1 = 2
function multiplyThis(n) {
let ret = n * val1
return ret
 }
 let multiplied = multiplyThis(6)
 console.log('example of scope:', multiplied) */

/*  let val = 7                          //1
 function createAdder() {             //2
   function addNumbers(a, b) {  
     let a = 1;      //3
     let ret = a + b                  //4
     return ret                       //5
   }                                  //6
   return addNumbers                  //7
 }                                    //8
 let adder = createAdder()            //9
 let sum = adder(val, 8)              
console.log('example of function returning a function: ', sum);
console.log('example of function returning a function: ', sum); */

// 1: */ function createCounter() {
//*   2: */   let counter = 0
 ///*  3:  */  const myFunction = function() {
 ///*  4: */     counter = counter + 1
  ///* 5: */     return counter
  ///* 6:  */  }
 ///*  7: */   return myFunction
 ///*  8: */ }
  ///* 9: */ const increment = createCounter()
 ///* 10: */ const c1 = increment()
 ///* 11: */ const c2 = increment()
 ///* 12: */ const c3 = increment()
 ///* 13: */ console.log('example increment', c1, c2, c3)

 /* let c = 4
function addX(x) {
  return function(n) {
     return n + x
  }
}
const addThree = addX(3)
let d = addThree(c)
console.log('example partial application', d)
console.log('example partial application', d)
console.log('example partial application', d) */


// Строки

/* let str = "stringify"; */

// для substring эти два примера — одинаковы
/* alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring" */

// …но не для slice:
/* alert( str.slice(2, 6) ); // "ring" (то же самое)
alert( str.slice(-6, -2) ); // "" (пустая строка) */


/* function retVar() {
  let num = 50;
  return num;
} */

/* let newNum = retVar(); */
/* console.log(retVar());
 */


/* let appDatamoneyPerDay = 50;
function detectLevel1() {
    if (appDatamoneyPerDay < 100) {
        alert("Минимальный уровень достатка");
    } else if (appDatamoneyPerDay > 100 && appDatamoneyPerDay < 2000) {
       alert('Средний уровень достатка');
    } else if (appDatamoneyPerDay > 2000) {
       return alert("Высокий уровень достатка");
    } else {
       alert("Ошибка");
    };
}
detectLevel1(); */

/* a = "5";
b = 2; 
c = a++git+b;
 */

/* let fruits = ["Яблоко", "Апельсин"];

fruits.push("Груша");

alert( fruits ); // Яблоко, Апельсин, Груша

fruits.push();
fruits[fruits.length];
 */

/* let fruits = ["Яблоки", "Груша", "Апельсин"]; */

// добавляем новое значение в "копию"
/* let shoppingCart = fruits;
shoppingCart.push("Банан"); */

// что в fruits?
/* alert( fruits.length ); // ? */


// let arr = ['first', 2, 3, 'four', 5];
// arr.pop();
// arr.push('5');
// arr.shift();
// arr.unshift('1');

// for (let i=0; i<arr.length; i++) {
//   console.log(arr[i]);
// }

/* arr.forEach(function(item, i, mass){
  console.log(i + ': ' + item + " (массив: " +mass + ')');
});

console.log(arr.length);

let mass = [1, 3, 4, 6, 7];
for (let key of mass) {
      console.log(key);
}
for (let key in mass) {
  console.log(key);
} */


/* let ans = prompt("", ''),
    arr = [];

    arr = ans.split(',');
    console.log(arr);
  */
/* 
    let arr = ['qqq', 'aaa', 'ass', 'gggg'],
        i = arr.join(', ');
        console.log(i);  */
   /*      let arr = [1, 15, 4],
            i = arr.sort(compareNum);

            function compareNum(a,b) {
              return a-b;
            }
        console.log(arr); */

/* let soldier = {
    health: 400, 
    armor: 100,

};

let Jon = {
    health: 100,
};
Jon.__proto__ = soldier;
console.log(Jon);
console.log(Jon.armor);
 */

/* let a = prompt();


alert(typeof(a));
 */

/* function hello() {
  console.log("Hello word");
}

hello();

function hi() {
  console.log("Hellj Word");
}
hi();

let arr = [1, 15, 4, 38, 42],
    i = arr.sort(compareNum);
        function compareNum(a,b) {
            return a -b;
        }

console.log(arr); */


/* 
let age = document.getElementById('age');

function showUser (surname, name) {
  alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
  console.log(this.value);
};

showUser(); */


// Второе задание


    
  let  btn = document.querySelector('button');

btn.addEventListener('click', function() {
  let age = document.getElementById('age').value,
      name = document.querySelector('#name').value;
  console.log(age);
         alert("Пользователь " + this.name + ""+ ", его возраст " + this.age);
});

