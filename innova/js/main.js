// submenu
const openMenu = document.querySelectorAll('.nav__item');
const submenu = document.querySelectorAll('.subnav__list');
const subitem = document.querySelectorAll('.subnav__item');


for(let i = 0; i < openMenu.length; i++) {
    openMenu[i].addEventListener('click', function() {


        if (submenu[i].style.display != 'flex') {
            submenu[i].style.display = 'flex';
            for(let x of submenu[i].querySelectorAll('.subnav__item')) {
                x.classList.add('anima');
                x.classList.remove('anim');

            }
        } else {

            for(let x of submenu[i].querySelectorAll('.subnav__item')) {
                x.classList.add('anim');
                x.classList.remove('anima');
            }

            function closing() {
                submenu[i].style.display = 'none';
            }

            setTimeout(closing, 500);
        }
    });
};


// menu-mobile
const openNav = document.querySelector('.menu-icon');
const closeNav = document.querySelector('.menu-close');
const sidebar = document.querySelector('.sidebar');


if(window.matchMedia('(max-width: 768px)').matches) {

    openNav.addEventListener('click', function(){
        sidebar.style.display = 'flex';
    })

    closeNav.addEventListener('click', function(){
        sidebar.style.display = 'none';
    })

} else {
    sidebar.style.display = 'flex';
}

// overlay

const favor = document.querySelectorAll('.icon-fav');
const favorActive = document.querySelectorAll('.icon-fav_active');
const iconClose = document.querySelectorAll('.icon-close');
const closeActive = document.querySelectorAll('.icon-close_active');


for(let z = 0; z < favor.length; z++) {
    favor[z].addEventListener('click', function(){
        favor[z].style.display = 'none';
        favorActive[z].style.display = 'inline-block';
    })

    closeActive[z].addEventListener('click', function(){
        favorActive[z].style.display = 'none';
        favor[z].style.display = 'inline-block';
    })
}


const tip = document.querySelectorAll('.icon-close-tip');
const fav = document.querySelectorAll('.icon-fav-tip');

for(let y = 0; y < iconClose.length; y++) {
    iconClose[y].addEventListener('mouseover', function(){
        tip[y].style.display = 'inline-block';
        closeActive[y].style.display = "inline-block";
        iconClose[y].style.display = 'none';
    })

    iconClose[y].addEventListener('mouseout', function(){
        tip[y].style.display = 'none';
        closeActive[y].style.display = "none";
        iconClose[y].style.display = 'inline-block';
    })

    favor[y].addEventListener('mouseover', function(){
        fav[y].style.display = 'inline-block';
    })

    favor[y].addEventListener('mouseout', function(){
        fav[y].style.display = 'none';
    })
}
