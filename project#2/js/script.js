/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        
    ]
};

let adv = document.querySelectorAll('.promo__adv img'),
    listOfFilms = document.querySelectorAll('.promo__interactive-item'),
    promo = document.querySelector('.promo__interactive-list'),
    inputFilm = document.querySelector('.adding__input'),
    btn = document.querySelector('button'),
    del = document.querySelectorAll('.delete'),
    lovefilms = document.querySelector('.add').querySelectorAll('input')[1];

adv.forEach(function(item) {
    item.remove();
});

document.querySelector('.promo__genre').textContent = "Драма";
document.querySelector('.promo__bg').style.background = "url(img/bg.jpg)";


newFilms();
function newFilms() {    
    movieDB.movies.sort();
    promo.innerHTML = '';
    for (let i = 0; i < movieDB.movies.length; i++) {
        promo.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${movieDB.movies[i]}
        <div class="delete"></div>
    </li>`;
    }
}

for (let i = 0; i < listOfFilms.length; i++) {
    listOfFilms[i].textContent = `${i + 1} ${movieDB.movies[i]}`;
}

btn.addEventListener('click', (event)=> {
    event.preventDefault();
    let a = inputFilm.value;
        if (lovefilms.checked) {
            if (a.length > 21) {
                let b = a.slice(0, 21) + "...";
                movieDB.movies.push(b);
            } else {
                movieDB.movies.push(inputFilm.value);
            }
            newFilms();
            console.log("Добавляем любимый фильм");
        } else {
            if (a.length > 21) {
                let b = a.slice(0, 21) + "...";
                movieDB.movies.push(b);
            } else {
                movieDB.movies.push(inputFilm.value);
            }
            newFilms();
        }   
 
});


   del.forEach(function(item) {
       item.addEventListener('click', function(event,i) {
        
    });
   });

  



