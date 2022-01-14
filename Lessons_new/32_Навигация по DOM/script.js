"use strict";

// console.log(document.body);

//  console.log(document.head);

//  console.log(document.body.childNodes); //Получаем элементы детей у body

// console.log(document.body.firstChild); //Получаем первый элемент у детей родителя

// console.log(document.body.lastChild); // Получем послдений элемент у детей родителя

// console.log(document.querySelector("#current").parentNode); //получаем родителя 

// console.log(document.querySelector("#current").parentNode.parentNode);// Получаем родителя у родителя нашего элемента

// console.log(document.querySelector('[data-current="3"]')); //Получаем элемент с data-current="3" Ковычки нельзя одинковые, Data-(можно назначать любой имя)

// console.log(document.querySelector('[data-current="3"]').nextSibling); // получаем следующий элемент почле data-current. Будет перенос строки

// console.log(document.querySelector('[data-current="3"]').previousSibling); //Получаем предыдущего соседа 




// ЧТОБЫ не получаем текстовые переносы или т.п.
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// console.log(document.querySelector("#current").parentElement);

// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

// console.log(document.body.firstElementChild);

// console.log(document.body.lastElementChild);

// перебираем всех childNodes для того, чтобы получить только элементы
for(let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}



