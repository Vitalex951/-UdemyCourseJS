

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
/*       let str = prompt("Введите предложение", "привет");
      let maxLength = +prompt("Ввидети максимальную длину строки","3");  */

    /*   function truncate(str, maxlength) {
        if (str.length > maxLength) {
        return str.slice(0, maxLength - 1) + '...';
        }
        
        return str; 
      }

      alert(truncate()); */
/* 
      function truncate(str="ПРИВЕТ КАК ДЕЛА", maxLength=5) {
        return (str.length > maxLength) ?
          str.slice(0, maxLength - 1) + '.' : str;
      }

      alert(truncate.maxLength);
 */




      //Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
//Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

/* let str = "$120";

function extractCurrencyValue(str) {
  return +str.substring(0);
}
console.log(extractCurrencyValue(str); */

function extractCurrencyValue(str) {
  let strNew = "";
  
  for (let i = 0; i < str.length; i++) {
  if (isFinite(str[i])) {
  strNew += str[i];
  }
  }
  
  return +strNew;
  }
  
  alert( extractCurrencyValue('120$') );

