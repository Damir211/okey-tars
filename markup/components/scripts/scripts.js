// document.querySelectorAll("a[href^='#'").forEach(link => {
//     link.addEventListener("click", function (e) {
//         e.preventDefault();
//         let href = this.getAttribute("href").substring(1);
//         const scrollTarget = document.getElementById(href);
//         if(!scrollTarget) return;
//         const topOffset = document.querySelector(".header").offsetHeight + 20;
//         // const topOffset = 0; // если не нужен отступ сверху
//         const elementPosition = scrollTarget.getBoundingClientRect().top;
//         const offsetPosition = elementPosition - topOffset;

//         window.scrollBy({
//             top: offsetPosition,
//             behavior: "smooth"
//         });
//     });
// });

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        let href = link.hash.substring(1);
        const scrollTarget = document.getElementById(href);
        if(scrollTarget){
            e.preventDefault();
        }else{
            return;
        }
        const topOffset = document.querySelector(".header").offsetHeight + 20;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});


window.addEventListener('scroll', function(){
    let scrollTop = getBodyScrollTop();
    
    if(scrollTop > 0){
        document.querySelector('.header').classList.add('scrolled');
        
    }else{
        document.querySelector('.header').classList.remove('scrolled');
    }
});

function getBodyScrollTop(){
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}
