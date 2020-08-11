// modal
const open = document.querySelectorAll('.open');
const close = document.querySelectorAll('.close');
const modal = document.querySelector('.modal');

for(i = 0; i < open.length; i++) {
    open[i].addEventListener('click', function() {
        modal.style.display = 'flex';
    });
}

for(i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function() {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', function(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
});
