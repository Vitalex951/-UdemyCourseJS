let menuFive = document.querySelector(".menu"),
    liFive = document.createElement("li"),
    bodyNew = document.querySelector('body'),
    mainDiv = document.querySelector(".title"),
    deletDiv = document.querySelector(".adv");
    parentalDiv = document.querySelectorAll(".column"),
    menuItem = document.getElementsByClassName(".menu-item");
    /* apple = prompt("Какое у вас отношение к технике Apple?"),
    appleAnswer = document.querySelector("#prompt"); */
    
    console.log("menuItem");



    
menuFive.appendChild(liFive);
liFive.classList.add("menu-item");
liFive.textContent = "Пятый пункт";

menuFive.insertBefore(menuItem[2], menuItem[1]);

bodyNew.style.background = "url('img/apple_true.jpg')";


mainDiv.innerHTML = "Мы продаем только подлинную технику Apple";


parentalDiv[1].removeChild(deletDiv);

/* appleAnswer.innerHTML = apple; */