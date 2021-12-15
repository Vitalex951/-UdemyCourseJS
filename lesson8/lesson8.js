
let num = +prompt('Введите число', 0);

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

switch (true) {
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

}