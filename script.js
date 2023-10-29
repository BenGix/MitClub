var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  speed: 500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

swiper.on('slideChangeTransitionEnd', function () {
  if (swiper.activeIndex === 2) {
    swiper.mousewheel.disable();
  }
});

var swiper2 = new Swiper(".mySwiper2", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  speed: 1000,
  effect: "creative",
  creativeEffect: {
    prev: {
      rotate: [0, 0, 30],
      origin: 'top center', // set the anchor point for rotation
      opacity: 0
    },
    next: {
      rotate: [0, 0, -30],
      origin: 'top center', // set the anchor point for rotation
      opacity: 0,
    }
  }
});

let counter1 = 0;
let counter2 = 0;

swiper2.el.addEventListener('wheel', function (event) {
  console.log(event.deltaY);
  if (event.deltaY > 0 && swiper2.activeIndex === 2) {
    counter1++;
    if (counter1 === 2) {
      setTimeout(function () {
        swiper.mousewheel.enable();
        // Reset counters and set activeIndex to 1
        counter1 = 0;
        counter2 = 0;
        swiper2.activeIndex = 0;
      }, 1000);
    }
  } else if (event.deltaY < 0 && swiper2.activeIndex === 0) {
    counter2++;
    if (counter2 === 2) {
      setTimeout(function () {
        swiper.mousewheel.enable();
        // Reset counters and set activeIndex to 1
        counter1 = 0;
        counter2 = 0;
        swiper2.activeIndex = 0;
      }, 1000);
    }
  }
});










var swiperCard = new Swiper(".mySwiperCard1", {
  slidesPerView: 1,
  effect: "cards",
  grabCursor: true,
});










window.onload = function () {
  function replaceAll(str) {
    str = str.toString();
    str = str.replace(/0/g, "۰");
    str = str.replace(/1/g, "۱");
    str = str.replace(/2/g, "۲");
    str = str.replace(/3/g, "۳");
    str = str.replace(/4/g, "۴");
    str = str.replace(/5/g, "۵");
    str = str.replace(/6/g, "۶");
    str = str.replace(/7/g, "۷");
    str = str.replace(/8/g, "۸");
    str = str.replace(/9/g, "۹");
    return str;
  }

  var elements = document.getElementsByClassName('replaceDigits');

  for (var i = 0; i < elements.length; i++) {
    elements[i].innerText = replaceAll(elements[i].innerText);
  }
}
