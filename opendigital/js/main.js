// owl-carousel

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        center: true,
        stagePadding: 20,
        dots: false,
        responsive: {
            0:{
                items: 1,
            },

            650:{
                items: 2,
            },

            991:{
                items: 2,
            },

            1400: {
                items: 3
            }
        },
    });

  });

// modal
const btnConsult = document.querySelector('.consult');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');
const form = document.querySelector('.modal-form');


btnConsult.addEventListener('click', function() {
    modal.style.display = 'flex';
    form.style.top = '0';
});

close.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
});

// menu
const menu = document.querySelector('.menu');
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');

menu.addEventListener('click', function(){
    if (item1.style.transform != 'rotate(-44deg) translateY(20px)' && item1.style.transformOrigin != '0 0' && item1.style.width != '30px' && item2.style.display != 'none' && item3.style.transform != 'rotate(44deg) translateY(-20px)' && item3.style.transformOrigin != '0 0' && item3.style.width != '30px') {
        item1.style.transform = 'rotate(-44deg) translateY(20px)';
        item1.style.transformOrigin = '0 0';
        item1.style.width = '30px';
        item2.style.display = 'none';
        item3.style.transform = 'rotate(44deg) translateY(-20px)';
        item3.style.transformOrigin = '0 0';
        item3.style.width = '30px';
    } else {
        item1.style.transform = '';
        item1.style.transformOrigin = '';
        item1.style.width = '';
        item2.style.display = '';
        item3.style.transform = '';
        item3.style.transformOrigin = '';
        item3.style.width = '';
    }
});

const nav = document.querySelector('#navigate');

menu.addEventListener('click', function(){
    if (nav.style.display != 'flex' && this.style.position != 'fixed') {
        nav.style.display = 'flex';
        this.style.position = 'fixed';
        this.style.right = '9%';
    } else {
        nav.style.display = 'none';
        this.style.position = 'static';

    }
})
