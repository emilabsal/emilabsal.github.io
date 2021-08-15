//premium-modal
const primg = document.querySelectorAll('.right-img');
const prmodal = document.querySelectorAll('.prmodal');
const prcross = document.querySelectorAll('.cross');

for (let i = 0; i < primg.length; i++) {
    primg[i].addEventListener('click', function () {
        prmodal[i].style.display = 'flex';
    })

    prcross[i].addEventListener('click', function () {
        prmodal[i].style.display = 'none';
    })
}
