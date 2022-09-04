const stepsContainers = document.querySelectorAll('.steps__container');
stepsContainers.forEach(item =>{
    const borderImgSrc = item.dataset.border;
    item.style.backgroundImage = `url(${borderImgSrc})`;
})