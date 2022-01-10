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

document.addEventListener('DOMContentLoaded', () => {

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
        lovefilms = document.querySelector('.add').querySelectorAll('input')[1],
        del,
        filmDelet;
    
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
        deleteFilm();
        document.querySelector(".add").reset();
    }
    
    btn.addEventListener('click', (event)=> {
        event.preventDefault();
        let a = inputFilm.value;
            if (lovefilms.checked && a != false) {
                if (a.length > 21) {
                    let b = a.slice(0, 21) + "...";
                    movieDB.movies.push(b);
                } else { 
                    movieDB.movies.push(inputFilm.value);
                } 
                newFilms();
                
                console.log("Добавляем любимый фильм");
            } else if (a != false) {
                if (a.length > 21) {
                    let b = a.slice(0, 21) + "...";
                    movieDB.movies.push(b);
                } else {
                    movieDB.movies.push(inputFilm.value);
                }
                newFilms();
            }  else {
                console.log("NOOOOOOOOOOO");
            }
     
    });
    
    
    function deleteFilm() {
         del = document.querySelectorAll(".delete");
         del.forEach(function(item, i) {
           item.addEventListener('click', function() {
           filmDelet = document.querySelectorAll(".promo__interactive-item");
           console.log(filmDelet[i]);
           promo.removeChild(filmDelet[i]);
           movieDB.movies.splice(i , 1);
           newFilms();
        });
       });
    }
      
});



