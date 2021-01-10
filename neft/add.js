//toggle
const left = document.querySelector('#left-toggle');
const right = document.querySelector('#right-toggle');
const salesman = document.querySelector('#sale-toggle');
const friend = document.querySelector('#friend-toggle');

right.addEventListener('click', function() {
        salesman.style.display = 'block';
        this.classList.add('color');
        friend.style.display = 'none';
        left.classList.remove('color');
})

left.addEventListener('click', function() {
        friend.style.display = 'block';
        salesman.style.display = 'none';
        this.classList.add('color');
        right.classList.remove('color');
})
