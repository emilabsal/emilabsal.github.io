//tabs
const sale = document.querySelector('#sale-arrow');
const content = document.querySelector('.tab-content');

sale.addEventListener('click', function() {
    if(content.style.display !== "block") {
        content.style.display = 'block';
        sale.classList.add('rotate');
    } else {
        content.style.display = 'none';
        sale.classList.remove('rotate');
    }
})
