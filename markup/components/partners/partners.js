const partnersContainers = document.querySelectorAll('.partners__list.hide-more');
partnersContainers.forEach(item => {
    item.querySelector('.button-visible-more').addEventListener('click', () => {
        item.classList.remove('hide-more');
    });
})