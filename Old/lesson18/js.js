let btn = document.querySelectorAll('button');
let wrap = document.querySelector('.wrapper');
let link = document.querySelector('a');

/* btn[0].onclick = function() {
    alert('hi');
};
 */
/* btn[0].addEventListener('click', function(event) {
    console.log('Произошло событие: ' + event.type + "На элементе" + event.target);
    
   
}); */

/* btn[0].addEventListener('mouseenter', function() {
    alert('whea are you ftom');
}); */

/* wrap.addEventListener('click', function() {
    console.log('Произошло событие: ' + event.type + "На элементе" + event.target);
});
 */
link.addEventListener('click', function(event){
    event.preventDefault();
    console.log('Произошло событие: ' + event.type + "На элементе" + event.target);
});

btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('leave');
    });
});