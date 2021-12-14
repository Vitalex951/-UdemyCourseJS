const NameCarOne = prompt("Введите марку первого авто", "");
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
  
