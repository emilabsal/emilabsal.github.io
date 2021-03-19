const tabs = document.querySelectorAll('.photo__tab');
const content = document.querySelectorAll('.photo__content');

for (let i = 0; i < tabs.length; i++) {
    content[0].style.display = 'flex';

    tabs[i].addEventListener('click', () => {
        for (let j = 0; j < tabs.length; j++) {
            content[j].style.display = 'none';
            tabs[j].classList.remove('active-tab');
        }

        tabs[i].classList.add('active-tab');
        content[i].style.display = 'flex';
    } )
}
