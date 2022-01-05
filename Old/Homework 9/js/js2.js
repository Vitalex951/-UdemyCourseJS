'use strict'


// Создать класс options

// ·        Он должен содержать свойства: height, width, bg, fontSize, textAlign

// ·        Он должен содержать метод, создающий новый div на странице, записывающий в него любой текст и при помощи cssText изменять свой стиль из переданных параметров

// ·        Создать новый объект через класс

// ·        Вызвать его метод и получить элемент на странице


//   function  newInput() {
let inp1 = document.createElement("input"),
    inp2 = document.createElement("input"),
    inp3 = document.createElement("input"),
    inp4 = document.createElement("input"),
    inp5 = document.createElement("input"),
    timer = document.querySelector('.timer'),
    newDiv = document.createElement('div');
newDiv.style.border = "2px solid white";

timer.appendChild(inp1);
timer.appendChild(inp2);
timer.appendChild(inp3);
timer.appendChild(inp4);
timer.appendChild(inp5);

newDiv.innerHTML = "<h1>Привет!</h1>";
timer.appendChild(newDiv);

let newArray = [inp1, inp2, inp3, inp4, inp5],
    newStyle = `
            height: 35px;
            width: 130px;
            border-radius: 2.5px;
            background-color: #fff;
            box-shadow: 0 2.5px 10px 0 rgb(1 0 42 / 10%);
            border: none;
            margin: 10px;
            display: none`;


for (let i = 0; i < newArray.length; i++) {
    if (i == 0) {
        inp1.placeholder = 'height';
        inp1.style.cssText = newStyle;
    } else if (i == 1) {
        inp2.placeholder = "width";
        inp2.style.cssText = newStyle;
    } else if (i == 2) {
        inp3.placeholder = " bg";
        inp3.style.cssText = newStyle;
    } else if (i == 3) {
        inp4.placeholder = "fontSize";
        inp4.style.cssText = newStyle;
    } else {
        inp5.placeholder = "textAlign";
        inp5.style.cssText = newStyle;
    }
}


function disp () {
    newStyle = `
            height: 35px;
            width: 130px;
            border-radius: 2.5px;
            background-color: #fff;
            box-shadow: 0 2.5px 10px 0 rgb(1 0 42 / 10%);
            border: none;
            margin: 10px;
            display: inline`;


for (let i = 0; i < newArray.length; i++) {
    if (i == 0) {
        inp1.placeholder = 'height';
        inp1.style.cssText = newStyle;
    } else if (i == 1) {
        inp2.placeholder = "width";
        inp2.style.cssText = newStyle;
    } else if (i == 2) {
        inp3.placeholder = " bg";
        inp3.style.cssText = newStyle;
    } else if (i == 3) {
        inp4.placeholder = "fontSize";
        inp4.style.cssText = newStyle;
    } else {
        inp5.placeholder = "textAlign";
        inp5.style.cssText = newStyle;
    }
}
}

    console.log(newArray[0]);

    newArray[0].addEventListener('change', function () {
        let inpHeight = newArray[0].value;
        newDiv.style.height = inpHeight + "px";
        console.log(inpHeight);
    });
    newArray[1].addEventListener('change', function () {
        let inpWidth = newArray[1].value;
        newDiv.style.width = inpWidth + `px`;
        console.log(inpWidth);
    });
    newArray[2].addEventListener('change', function () {
        let inpbg = newArray[2].value;
        newDiv.style.color = inpbg;
    });
    newArray[3].addEventListener('change', function () {
        let inpFontSize = newArray[3].value;
        newDiv.style.fontSize = inpFontSize + `px`;
    });
    newArray[4].addEventListener('change', function () {
        let inpTextAlign = newArray[4].value;
        newDiv.style.textAlign = inpTextAlign;
    });