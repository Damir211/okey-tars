function popupOpen(selector){
    let popup = document.querySelector(selector);
    if(popup){
        popup.classList.add('active');
        document.body.style.width = document.body.offsetWidth + 'px';
        document.querySelector('header').style.width = document.body.offsetWidth + 'px';
        document.body.classList.add('no-scroll');
    }
}
function popupClose(){
    document.querySelectorAll('.popup').forEach(item => {
        item.classList.remove('active');
    })
    document.body.style.width = '100%';
    document.querySelector('header').style.width = '100%';
    document.body.classList.remove('no-scroll');
}

document.querySelectorAll('.popup__close').forEach(item => {
    item.addEventListener('click', popupClose);
});
document.querySelectorAll('[data-popup-open]').forEach(item => {
    item.addEventListener('click', function(e){
        e.preventDefault();
        let popupSelector = "." + item.dataset.popupOpen;
        popupOpen(popupSelector);
    });
});
document.querySelectorAll('.popup').forEach(popup => {
    popup.addEventListener('mousedown', function(e){
        if(e.target === this){
            popupClose();
        }
    });
});
document.querySelectorAll('.header-mobile-menu-btn').forEach(btn => {
    btn.addEventListener('click', function(){
        let mobileMenu = document.querySelector('.mobile-menu')
        if(!mobileMenu) return;
        mobileMenu.classList.toggle('active');
    });
});
document.querySelectorAll('.mobile-menu .nav__link').forEach(item => {
    item.addEventListener('click', function(){
        let mobileMenu = document.querySelector('.mobile-menu')
        if(!mobileMenu) return;
        mobileMenu.classList.remove('active');
    });
})