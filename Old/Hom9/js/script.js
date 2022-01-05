//  window.addEventListener("DOMContentLoaded", function () {


let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    }
}

hideTabContent(1);

function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');

    }
}

info.addEventListener('click', function (event) {
    let target = event.target;
    console.log(target);
    if (target && target.classList.contains('info-header-tab')) {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }
    }
});

//modal

let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');
console.log(more);
console.log(overlay);

more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
    console.log(this);
});

close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('.more-splash');
    document.body.style.overflow = '';
});














//Timer
/* 
    let deadline = '2021-12-31';

    function getTimeRemaining(endTime) {

        let t =  (Date.parse(endTime) > Date.parse(new Date())) ?  Date.parse(endTime) - Date.parse(new Date()) : '0',
            

       
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t/(1000*60*60)));
        
            // hours = Math.floor((t/1000/60/60) % 24);
            // days = Math.floor((t/(1000*60*60*24)));
        return {
        
            'total': t,
            'hours': (hours < 10) ? '0'  + hours : hours,
            'minutes': (minutes < 10) ? '0' + minutes : minutes,
            'seconds': (seconds < 10) ? '0' + seconds: seconds
        };
    }

        function setClock(id, endTime) {
            let timer = document.getElementById(id),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds');
                timeInterval = setInterval(updateClock, 1000);
            
                function updateClock() {
                    let t = getTimeRemaining(endTime);
                    hours.textContent = t.hours;
                    minutes.textContent = t.minutes;
                    seconds.textContent = t.seconds;

                    if (t.total <= 0) {
                        clearInterval(timeInterval);
                    }
                }
        }

        setClock('timer', deadline); */

let deadline = "2022-09-03"; //

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()); // передаем дедлайн и отнимаем от него текущую дату (все в милисекундах)
    let seconds = Math.floor((t / 1000) % 60); // вычленяем кол-во целых минут и берем остаток
    let minutes = Math.floor((t / 100 / 60) % 60); // получаем кол-во часов и оставляем остаток в виде минут
    let hours = Math.floor(t / (1000 * 60 * 60)); // из всего кол-ва милисекунд взяли кол-во целых часов
    /*
        hours = Math.floor((Math.floor((t/100/60) % 24))); // получим хвостик с часами
        days = Math.floor((t/(1000*60*60*24))); // получаем дни
        */
    return {
        total: t,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
}

function setClock(id, endtime) {
    // выставляет и запускает наши часы
    let timer = document.getElementById(id),
        hours = timer.querySelector(".hours"),
        minutes = timer.querySelector(".minutes"),
        seconds = timer.querySelector(".seconds");
    let timeInterval = setInterval(updateClock, 1000);

    function updateClock(a) {
        // функция записывает в верстку наши данные
        let t = getTimeRemaining(endtime);
        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.textContent = t.seconds;

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock("timer", deadline);






// form

let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
};

let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

statusMessage.classList.add('status');


//    });

form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    // request.setRequestHeader ('Content-Type', 'aplication/x-www-form-urlencoded'); 
    request.setRequestHeader('Content-type', 'aplication/json; charset=utf-8');


    let formData = new FormData(form);

    let obj = {};
    formData.forEach(function (value, key) {
        obj[key] = value;
    });

    let json = JSON.stringify(obj);


    request.send(json);

    request.addEventListener('readystatechange', function () {
        if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4 && request.status == 200) {
            statusMessage.innerHTML = message.success;
        } else {
            statusMessage.innerHTML = message.failure;
        }

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
});


// form 2

let formEmailPhone = document.querySelector('#form'),
    inputEmail = formEmailPhone.getElementsByTagName('input')[0],
    inputPhone = formEmailPhone.getElementsByTagName('input')[1],
    statusForm = document.createElement('div');

statusForm.classList.add('status');

formEmailPhone.addEventListener('submit', function (event) {
    event.preventDefault();
    formEmailPhone.appendChild(statusForm);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

    let formDateEmailPhone = new FormDataEmailPhone(formEmailPhone);
    request.send(formDateEmailPhone);
});



console.log(inputEmail);
console.log(inputPhone);