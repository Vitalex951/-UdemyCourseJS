 let Name = prompt("Как тебя зовут?");
alert (`Тебя зовут ${Name}`); */

 let name = prompt("Ваше имя?", "");
alert(name); */

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
}
 
