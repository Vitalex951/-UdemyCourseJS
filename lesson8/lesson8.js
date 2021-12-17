
/* let num = prompt('Введите число', 0); */

/* if (num < 49) {
    console.log("неверно")
} else if (num > 100) {
    console.log("МНОГО!")
} else if (num > 80) { 
    console.log("Все еще много")
} else {
    console.log ("Верно!")
};

(num == 50) ? console.log("Верно") : console.log("Неверно"); */

/* switch (true) {
    case (num < 49):
        console.log("Неверно");
        break;
    case num > 100:
        console.log("Много");
        break;
    case num > 80:
        console.log("Все еще много");
        break;
    case 50:
        console.log("Верно");
        break;
    default:
        console.log("Что-то пошло не так");
        break;

} */

/* function first() {
       setTimeout( function() {
        console.log(1);
    }, 500 );
}
function second() {
    console.log(2);
}
first();
second();

function learnJS(lang, callbacl) {
    console.log("Я учу " + lang);
    callbacl();
}
 function done(){
    console.log("Я прошел 3 урок")
 }
learnJS("Java SCRiot", done) */

l/* et options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);

options.bool = false;
options.coolors = {
    border: "black",
    bg: "red"
}
delete options.bool;
console.log (options);

for (let key in options) {
    console.log("Свойство " + key + " имеет значени "+ options[key]);
}console.log (Object.keys(options)); */

function hello(name) {
    let phrase = `Hello, ${name}!`;
  
    say(phrase);
  }
  
  function say(phrase) {
    alert(`** ${phrase} **`);
  }
  