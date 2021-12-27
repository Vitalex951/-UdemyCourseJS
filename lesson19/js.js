/* let timerid = setTimeout(sayHello, 3000);
clearTimeout(timerid); */

/* function sayHello () {
    alert('hello');
}

let timerid = setInterval(sayHello, 3000);
clearTimeout(timerid);  */
/*  */ 
/* let timeId = setTimeout(function log() {


    console.log('hello');
    setTimeout(log, 2000);
}); */

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

    function animation () {
        let pos = 0;

        let id = setInterval (frame, 10);

        function frame () {
            if (pos == 300) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }


    };

    btn.addEventListener('click', animation);

    let btnBlock = document.querySelector('.btn-block');
    let btns = document.getElementsByTagName('button');

    btnBlock.addEventListener('click', function(event) {
        if (event.target && event.target.matches('button.first')) {
        console.log("выпонлнено");   
        }
     });
 