// Modal
const modal = document.querySelector('#modal');
const open = document.querySelector('.open');
const open1 = document.querySelector('.open1');
const open2 = document.querySelector('.open2');
const close = document.querySelector('#close');

open.addEventListener('click', function() {
    modal.style.display = 'flex';
});

open1.addEventListener('click', function() {
    modal.style.display = 'flex';
});

open2.addEventListener('click', function() {
    modal.style.display = 'flex';
});

close.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
});


// Gallery
const left = document.querySelector('.arrow-left');
const right = document.querySelector('.arrow-right');
const slider = document.querySelectorAll('.slider');

let count = 0;

right.addEventListener('click', function() {
    for(let i = 0; i < slider.length; i++) {
    slider[i].style.display = 'none';
    }

    count++;

    if (count > 2) {
        count = 0;
    }

    slider[count].style.display = 'flex';
});

left.addEventListener('click', function() {
    for(let i = 0; i < slider.length; i++) {
    slider[i].style.display = 'none';
    }

    count--;

    if (count < 0) {
    count = 2;
    }

    slider[count].style.display = 'flex';
});
