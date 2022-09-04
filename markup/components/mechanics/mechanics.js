const elementWithImage = document.querySelectorAll('[data-border]');
elementWithImage.forEach(item =>{
    const borderImgSrc = item.dataset.border;
    item.style.backgroundImage = `url(${borderImgSrc})`;
})