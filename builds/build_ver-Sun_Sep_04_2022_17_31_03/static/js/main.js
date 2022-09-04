"use strict";

var stepsContainers = document.querySelectorAll('.steps__container');
stepsContainers.forEach(function (item) {
  var borderImgSrc = item.dataset.border;
  item.style.backgroundImage = "url(".concat(borderImgSrc, ")");
});
"use strict";

var partnersContainers = document.querySelectorAll('.partners__list.hide-more');
partnersContainers.forEach(function (item) {
  item.querySelector('.button-visible-more').addEventListener('click', function () {
    item.classList.remove('hide-more');
  });
});
"use strict";

function popupOpen(selector) {
  var popup = document.querySelector(selector);

  if (popup) {
    popup.classList.add('active');
    document.body.style.width = document.body.offsetWidth + 'px';
    document.querySelector('header').style.width = document.body.offsetWidth + 'px';
    document.body.classList.add('no-scroll');
  }
}

function popupClose() {
  document.querySelectorAll('.popup').forEach(function (item) {
    item.classList.remove('active');
  });
  document.body.style.width = '100%';
  document.querySelector('header').style.width = '100%';
  document.body.classList.remove('no-scroll');
}

document.querySelectorAll('.popup__close').forEach(function (item) {
  item.addEventListener('click', popupClose);
});
document.querySelectorAll('[data-popup-open]').forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    var popupSelector = "." + item.dataset.popupOpen;
    popupOpen(popupSelector);
  });
});
document.querySelectorAll('.popup').forEach(function (popup) {
  popup.addEventListener('mousedown', function (e) {
    if (e.target === this) {
      popupClose();
    }
  });
});
"use strict";

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
document.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function (e) {
    var href = link.hash.substring(1);
    var scrollTarget = document.getElementById(href);

    if (scrollTarget) {
      e.preventDefault();
    } else {
      return;
    }

    var topOffset = document.querySelector(".header").offsetHeight + 20;
    var elementPosition = scrollTarget.getBoundingClientRect().top;
    var offsetPosition = elementPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});
window.addEventListener('scroll', function () {
  var scrollTop = getBodyScrollTop();

  if (scrollTop > 0) {
    document.querySelector('.header').classList.add('scrolled');
  } else {
    document.querySelector('.header').classList.remove('scrolled');
  }
});

function getBodyScrollTop() {
  return self.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop;
}
"use strict";

var timerElement = document.querySelector('.timer');
var partnersBlock = document.getElementById('partners');
var fixedLinkElement = document.querySelector('.fixed-link');
var partnersBlockOffsetTop = document.body.offsetHeight;

if (partnersBlock) {
  partnersBlockOffsetTop = partnersBlock.offsetTop;
}

if (timerElement) {
  timerElement.querySelector('.timer__close').addEventListener('click', function () {
    this.closest('.timer').classList.add('hide');
  });
  window.addEventListener('scroll', function () {
    var scrollTop = getBodyScrollTop();

    if (scrollTop > 0 && scrollTop < partnersBlockOffsetTop) {
      timerElement.classList.add('active');
    } else {
      timerElement.classList.remove('active');
    }
  });
  var dataEndDate = timerElement.dataset.timerTo;
  var endDate = new Date(dataEndDate).getTime();
  var timer = setInterval(function () {
    var now = new Date().getTime();
    var t = endDate - now;

    if (t >= 0) {
      var hours = Math.floor(t / 1000 / 60 / 60);
      var mins = Math.floor(t % (1000 * 60 * 60) / (1000 * 60));
      var secs = Math.floor(t % (1000 * 60) / 1000);
      hours = hours < 10 ? ("0" + hours).slice(-2) : hours;
      document.getElementById("timer__hours").innerHTML = hours;
      document.getElementById("timer__mins").innerHTML = ("0" + mins).slice(-2);
      document.getElementById("timer__sec").innerHTML = ("0" + secs).slice(-2);
    } else {
      timerElement.querySelector('.timer__time').innerHTML = "Завершён!";
    }
  }, 1000);
}

if (fixedLinkElement) {
  window.addEventListener('scroll', function () {
    var scrollTop = getBodyScrollTop() + 120;

    if (scrollTop > partnersBlockOffsetTop) {
      fixedLinkElement.classList.add('active');
    } else {
      fixedLinkElement.classList.remove('active');
    }
  });
}