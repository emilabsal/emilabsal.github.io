// menu
const menu = document.querySelector('.menu-mobile');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');
const body = document.querySelector('body');


menu.addEventListener('click', () => {
    nav.style.display = 'flex';
    body.style.overflow = 'hidden';
})

close.addEventListener('click', () => {
    nav.style.display = 'none';
    body.style.overflow = 'auto';
})
