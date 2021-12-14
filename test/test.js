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
for (let i = 0; i < 10; i++) {

  // если true, пропустить оставшуюся часть тела цикла
  if (i % 2 == 0) continue;

  alert(i); // 1, затем 3, 5, 7, 9
}
