

/* const NameCarOne = prompt("Введите марку первого авто", "");
let SpeedCarOne = +prompt("Введите скорость вашего авто", "");

let answer = (`Авто ${NameCarOne} едет со скоростью ${SpeedCarOne}`);
alert(answer);

const NameCarTwo = prompt("Введите марку второго авто", "");
let SpeedCarTwo = +prompt("Введите скорость вашего авто", "");

let answe = (`Авто ${NameCarTwo} едет со скоростью ${SpeedCarTwo}`);
alert(answe);

if (SpeedCarOne > SpeedCarTwo) {
  const differenceSpeedOne = (SpeedCarOne - SpeedCarTwo);
  alert (`Скорость ${NameCarOne} больше скорости ${NameCarTwo} на ${differenceSpeedOne}`);
} else {
  const differenceSpeedTwo = (SpeedCarTwo - SpeedCarOne);
  alert( `Скорость ${NameCarTwo} выше скорости ${NameCarOne} на ${differenceSpeedTwo}`);
}
    */


/* Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно. */
/* let a
do {
  a = +prompt('Введите число, больше 100', 0);
} while (a <= 100 && a); */


/* 
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

Напишите код, который выводит все простые числа из интервала от 2 до n.

Для n = 10 результат должен быть 2,3,5,7.

P.S. Код также должен легко модифицироваться для любых других интервалов. */

/* let n = prompt("Введите число больше 2", 3);
newCode:
for (let i = 3; i <= n; i++) {

  for (let y = 2; y < i; y++) {
    if (i % y == 0) continue newCode;
  } ;
  console.log(`Простые числа от 2 до ${n} = ${i}`);
}; */


// Напишите if..else, соответствующий следующему switch:

/* switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
 */
/* if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
} */


// Перепишите код с использованием одной конструкции switch:
/* 
 const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
} 

const number = +prompt('Введите число между 0 и 3', '');*/
 
/* switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break;

  case 1:
    alert('Вы ввели число 1');
    break;
  
    case 2:
    case 3:
      alert('Вы ввели число 2, а может и 3');
      break;
    
    default:
      alert('Хрен его знает что ты вводишь');
} */

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

/* ucFirst("вася") == "Вася"; */

/* alert( 'Вася'[0].toLowerCase(1) ); // 'i' */

/* let str = prompt("");

function ucFirst(str) {
   if (!str) {
    return); 
  }  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst(str)); */

/* console.log('алфавит'[1].toUpperCase()); // 'АЛФАВИТ' */




//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
//Функция должна быть нечувствительна к регистру:

/* checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false */

/* let str = prompt("");
function checkSpam(str) {
  let a = str.toLowerCase();
  return a.includes("xxx") || a.includes("viagra");
};

alert(checkSpam(str)); */


// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, // заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.



/* function truncate(str, maxLength) {
if ( str.length > maxLength) return str.slice(0, maxLength-1) + "...";
    return str;
};

alert(truncate(Привет, 2)); */

/* function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
 */

/* function truncate(str, maxLength) {
  if ( str.length > maxLength) {
      console.log(maxLength);
      console.log(str);
      let newStr = str.slice(maxLength) + "...";
      console.log(newStr);
      return newStr;
    };
  return str;
}

alert(truncate(str)); */

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, // заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.


     /*  let str = prompt("Введите предложение", "привет");
      let maxLength = +prompt("Ввидети максимальную длину строки","3");  
     function truncate() {
        if (str.length > maxLength) {
          str = "Досвидос";
          maxLength = 3;
          let newStr = str.slice(0, maxLength - 1) + '...';
         return newStr;  
        }
        return str; 
      }
      alert(str);
      truncate(str, maxLength);
      alert(str); */
      
 



      //Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
//Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

/* let str = "$120";

function extractCurrencyValue(str) {
  let newstr = +str.slice(1);
  alert(newstr);
}
extractCurrencyValue(str);
 */


/* Следующая функция возвращает true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат.
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
Сделайте два варианта функции checkAge:
Используя оператор ?
Используя оператор || */
/* let result = условие ? значение1 : значение2;

function checkAge(age) {
  return age < 18 ||  
}

function checkAge(age) {
  return age >18 ? true : confirm('Родители разрешили?');
} */



//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

/* function min(a,b) {
  if (a>b) return alert(a);
  return alert(b);
}

let a = +prompt("Напишите число a");
let b = +prompt("Напишите число b");

min(a,b); */

/* 
Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и воз результат.
 Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n). 
 P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше. */


 /* let x = +prompt('Введите x', 2);
 let n = +prompt('Введите n', 2);

  if (n>0) {

 function pow(x,n) {
   let y = x;
      for (i=1; i <= n; i++) {
      y *= x; 
   }
   return y;
 } alert( pow(x, n) );
} else {
  alert("введите натуральное число");
}
 */

/* function pow(x, n) {
  return n < 1 ? alert("В степени можно использовать только натуральное число выше 0" ) : x**n
  }
  alert(pow (prompt('Укажите число'), prompt('Укажите степень числа больше 0')))

 */


  // Замените код Function Expression стрелочной функцией:

  // function ask(question, yes, no  ) {
  //   if (confirm(question)) yes()
  //   else no();
  // }
  
  // ask(
  //   "Вы согласны?",
  //   function() { alert("Вы согласились."); },
  //   function() { alert("Вы отменили выполнение."); }
  // );

  /* function ask (question, yes, no) {
    if (confirm(question)) yes ()
    else no(); 
  };
  
  ask(
    "Вы согосаны",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  ); */

  
  // Давайте произведём 5 операций с массивом.

  // Создайте массив styles с элементами «Джаз» и «Блюз».
  // Добавьте «Рок-н-ролл» в конец.
  // Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
  // Удалите первый элемент массива и покажите его.
  // Вставьте «Рэп» и «Регги» в начало массива.
  // Массив по ходу выполнения операций:
  
  // Джаз, Блюз
  // Джаз, Блюз, Рок-н-ролл
  // Джаз, Классика, Рок-н-ролл
  // Классика, Рок-н-ролл
  // Рэп, Регги, Классика, Рок-н-ролл


  /* let styles = ["Джаз", "Блюз", "Раз", "Три", "Пять", "Six"]; */
 /*  styles.push("Рок-н-ролл");
  console.log(styles); */
 /*  styles[Math.floor(styles.length-1)/2] = "Классика"; */
  
/*   styles[Math.floor((styles.length - 1) / 2)] = "Классика"; */
  /* console.log(styles); */
  /* alert(styles.shift());
  console.log(styles);
  styles.unshift("Рэп", "Регги");
  console.log(styles); */
 


//   Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0»

/* let setNumbers = [];
function sumInput() {

  while (true) {
    let a = prompt("Введите значение");
    if (a === "" || a === null || !isFinite(a)) {
      break;
      
    }  setNumbers.push(+a);
    
  };

   let sum = 0;
   for (let b of setNumbers) {
    sum += b;
   }
   return sum;
};
alert(sumInput()); */




// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

// Функция getMaxSubSum(arr) должна возвращать эту сумму.

// arr = []

// function getMaxSubSum() {
  
// }





// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.


/* function Calculator (a,b) {
  this.read = function() {
    this.a = +prompt('а');
    this.b = +prompt('b');
    console.log(this.a + this.b);
  };
  this.sum = function() {
    let i = this.a + this.b;
    return alert('sum=' + i);
  };
  this.mul = function() {
    let mulla = this.a * this.b;
    return alert('mul = ' + mulla);
  };
}

let a = new Calculator();

a.read();
a.sum();
a.mul(); */

/* function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */




// Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

/* let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений */

/* function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.a = +prompt('Введите число');
     this.value = this.a + this.value
  };
 
}
let accumulator = new Accumulator(2); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений */


// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber() {
  let a;
  do {
    a = prompt('Введите чилос');
  } while(isNaN(a))
  alert(`Ваше число ${a}`);

};
readNumber()