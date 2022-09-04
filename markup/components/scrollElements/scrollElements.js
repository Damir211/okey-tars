const timerElement = document.querySelector('.timer');
const partnersBlock = document.getElementById('partners');
const fixedLinkElement = document.querySelector('.fixed-link');
let partnersBlockOffsetTop = document.body.offsetHeight;
if(partnersBlock){
    partnersBlockOffsetTop = partnersBlock.offsetTop;
}

if(timerElement){
    timerElement.querySelector('.timer__close').addEventListener('click', function(){
        this.closest('.timer').classList.add('hide');
    });

    window.addEventListener('scroll', function(){
        let scrollTop = getBodyScrollTop();
        
        if(scrollTop > 0 && scrollTop < partnersBlockOffsetTop){
            timerElement.classList.add('active');
        }else{
            timerElement.classList.remove('active');
        }
    });
    let dataEndDate = timerElement.dataset.timerTo;
    let endDate = new Date(dataEndDate).getTime();
    let timer = setInterval(function() {
        let now = new Date().getTime();
        let t = endDate - now;
        
        if (t >= 0) {
            let hours = Math.floor(t / 1000 / 60 / 60);
            let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            let secs = Math.floor((t % (1000 * 60)) / 1000);
        
            hours = hours < 10 ? ("0"+hours).slice(-2) : hours;

            document.getElementById("timer__hours").innerHTML = hours;
        
            document.getElementById("timer__mins").innerHTML = ("0"+mins).slice(-2);
        
            document.getElementById("timer__sec").innerHTML = ("0"+secs).slice(-2);
        
        } else {
            timerElement.querySelector('.timer__time').innerHTML = "Завершён!";
        }
        
    }, 1000);
}
if(fixedLinkElement){
    window.addEventListener('scroll', function(){
        let scrollTop = getBodyScrollTop() + 120;
        
        if(scrollTop > partnersBlockOffsetTop){
            fixedLinkElement.classList.add('active');
        }else{
            fixedLinkElement.classList.remove('active');
        }
    });

}




