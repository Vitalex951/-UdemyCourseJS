/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        personalMovieDB.count = numberOfFilms;
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('ok');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonaLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else if (personalMovieDB.privat == true) {
            personalMovieDB.privat = false;
        }
    },
    writeYourGenres:  function()  {
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
            if (personalMovieDB.genres[i]== "" || personalMovieDB.genres[i] == null) {
                i--;
            }  
        }
            personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр № ${i + 1} - это ${item}`);
        });
        /* Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
        при помощи метода forEach вывести в консоль сообщения в таком виде:
        "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

    }
    
};


// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonaLevel();
// personalMovieDB.showMyDB;
personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();

console.log(personalMovieDB);