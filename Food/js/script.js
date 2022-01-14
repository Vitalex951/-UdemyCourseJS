window.addEventListener('DOMContentLoaded', () => {
// Табы
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent () {
        tabsContent.forEach (item => {
            item.style.display = 'none';
        });

        tabs.forEach (item => {
            item.classList.remove('tabheader__item_active');
        } );
    }
    
    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
       const target = event.target;
       if (target && target.classList.contains('tabheader__item')) { 
           tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
           });
       }
    });

// Таймер

const deadline = '2022-01-17';

function getTimeRemaining (endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000*60*60*24)),
          hours = Math.floor((t / (1000*60*60) % 24)),
          minutes = Math.floor((t/1000/60) % 60),
          seconds = Math.floor((t/1000) % 60);
    
    return {
        'total': t,
        days,
        hours,
        minutes,
        seconds
    };

}

function getZero (num) {
    if (num >=0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}


function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
        days = document.querySelector('#days'),
        hours = document.querySelector('#hours'),
        minutes = document.querySelector('#minutes'),
        seconds = document.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);
        
        updateClock ();

        function updateClock () {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
}
    setClock('.timer', deadline);

    //Modal

    const modalTrigger = document.querySelectorAll('[data-modal'),
          modalClose = document.querySelector('[data-close]'),
          modal = document.querySelector('.modal');

          console.log(modalTrigger);
          console.log(modalClose);


    modalTrigger.forEach((item) => {
        item.addEventListener('click', (i) => {
            showModal();
        });
    });

    function showModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    modal.addEventListener('click' , (i) => {
        console.log(i.target);
        if (i.target === modal) {
            closeModal();
        }
    });

    modalClose.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape"&&  modal.style.display == 'block') {
            console.log('11111');
            closeModal();
        }
    });

    const modalTimerId = setTimeout(showModal, 20000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            showModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

      
       
});