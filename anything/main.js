// menu
const menu = document.querySelector('.menu-mobile');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');


if (document.documentElement.clientWidth < 768) {
    menu.addEventListener('click', function(){
        nav.style.display = 'flex';
    })

    close.addEventListener('click', function(){
        nav.style.display = 'none';
    })
}


// up-button
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#up-btn').fadeIn();
        } else {
            $('#up-btn').fadeOut();
        }
    });

    $('#up-btn').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});
