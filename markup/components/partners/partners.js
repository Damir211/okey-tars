const partnersContainers = document.querySelectorAll('.partners__list.hide-more');
partnersContainers.forEach(item => {
    item.querySelector('.button-visible-more').addEventListener('click', () => {
        item.classList.remove('hide-more');
    });
});

const pdfLinksArray = document.querySelectorAll('[data-document-src]');
pdfLinksArray.forEach(item => {
    let url = 'https://docs.google.com/viewerng/viewer?url=' + window.location.href + item.getAttribute('data-document-src')+'&embedded=true';
    item.setAttribute('href', url);
});