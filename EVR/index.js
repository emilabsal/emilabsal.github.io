//menu

const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const close = document.querySelector('.close');

menu.addEventListener('click', function () {
    nav.classList.add('flex');
    close.style.display = 'block';
})

close.addEventListener('click', function () {
    nav.classList.add('none');
    nav.classList.remove('flex')
    this.style.display = 'none';
})

document.addEventListener("DOMContentLoaded", function(event)
{
    window.onresize = function() {
        if (window.screen.width > 1200) {
            nav.classList.remove('none');
    }
    };
});

//форма (ФЛ и ЮЛ)
const natural = document.querySelector('#natural');
const legal = document.querySelector('#legal');
const company = document.querySelector('#company');
const legal1 = document.querySelector('.legal');
const natural1 = document.querySelector('.natural');

natural.addEventListener('click', function () {
    if (natural.checked == true) {
        company.style.display = 'none';
        natural1.classList.add('active-form');
        legal1.classList.remove('active-form');
    }
})

legal.addEventListener('click', function () {
     if (legal.checked == true) {
         company.style.display = 'block';
         legal1.classList.add('active-form');
         natural1.classList.remove('active-form');
    }
})
