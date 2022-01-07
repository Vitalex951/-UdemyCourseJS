/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
        
    ]
};

let adv = document.querySelectorAll('.promo__adv img'),
    listOfFilms = document.querySelectorAll('.promo__interactive-item');

adv.forEach(function(item) {
    item.remove();
});

document.querySelector('.promo__genre').textContent = "Драма";
document.querySelector('.promo__bg').style.background = "url(img/bg.jpg)";

movieDB.movies.sort();

for (let i = 0; i < listOfFilms.length; i++) {
    listOfFilms[i].textContent = `${i + 1} ${movieDB.movies[i]}`;
}

