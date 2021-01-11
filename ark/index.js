const menu = document.querySelector('#menu');
const close = document.querySelector('#close');
const navigation = document.querySelector('#navigation');

menu.addEventListener('click', function(){
    navigation.style.display = 'flex';
    close.style.display = 'block';
})

close.addEventListener('click', function() {
    navigation.style.display = 'none';
    this.style.display = 'none';


    if(window.screen.width > 1500) {
        navigation.style.display = 'flex';
        close.classList.add('closeit');
    }
})
