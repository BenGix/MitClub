var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  speed: 1000,
  navigation: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChange: function () {
      var heightManager = document.querySelector('.height-manager');
      heightManager.classList.add('active');
      setTimeout(function () {
        heightManager.classList.remove('active');
      }, 400);
      
    },
    
  }
});

var swiper2 = new Swiper(".mySwiper2", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1000,
  mousewheel: false,
  allowTouchMove: false,
  effect: "creative",
  creativeEffect: {
    prev: {
      rotate: [0, 0, 30],
      origin: 'top center',
      opacity: 0
    },
    next: {
      rotate: [0, 0, -30],
      origin: 'top center',
      opacity: 0,
    }
  }
});

var swiperCard = new Swiper(".mySwiperCard1", {
  effect: "coverflow",
  grabCursor: false,
  centeredSlides: true,
  mousewheel: false,
  allowTouchMove: false,
  slidesPerView: 1,
  spaceBetween: -250,
  slidesPerView: "auto",
  slidesPerGroup: 1,
  touchRatio: 0.5,
  freeMode: false,
  freeModeMomentum: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
});

var swiperCard = document.querySelector('.mySwiperCard1').swiper;
document.querySelector('.mySwiperCard1').addEventListener('click', function () {
  var nextSlideIndex = swiperCard.activeIndex + 1;
  swiperCard.slideTo(nextSlideIndex);
});

var swiperContainers = document.querySelectorAll('.swiper-container');

swiperContainers.forEach(function (container) {
  container.addEventListener('wheel', function (event) {
    if (!swipeProcessed) {
      if (event.deltaY > 0) {
        // Scrolled down, trigger next button
        console.log("down")
        document.getElementById('customNextButton').click();
      } else {
        // Scrolled up, trigger previous button
        console.log("up")
        document.getElementById('customPrevButton').click();
      }
      swipeProcessed = true; // Set the flag when a swipe is processed
    }
   
    // Reset the flag after a delay to allow multiple swipes
    setTimeout(function () {
      swipeProcessed = false;
    }, 500);
  });
});


let disableIndexes = [2, 5];

swiper.on('slideChangeTransitionEnd', function () {
  if (disableIndexes.includes(swiper.activeIndex)) {
    swiper.mousewheel.disable();
    swiper.allowTouchMove = false;
  } else {
    swiper.mousewheel.enable();
    swiper.allowTouchMove = true;
  }

});

document.getElementById('customNextButton').addEventListener('click', function () {
  if (swiper.activeIndex === 2 && swiper2.activeIndex === 0) {
    swiper2.slideNext();
  } else if (swiper.activeIndex === 2 && swiper2.activeIndex === 1) {
    swiper2.slideNext();
  }
  else if (swiper.activeIndex === 5 && swiperCard.activeIndex === 0) {
    swiperCard.slideNext();
  }
  else if (swiper.activeIndex === 5 && swiperCard.activeIndex === 1) {
    swiperCard.slideNext();
  }
  else if (swiper.activeIndex === 5 && swiperCard.activeIndex === 2) {
    swiperCard.slideNext();
  }
  else {
    swiper.slideNext();
  }
});

document.getElementById('customPrevButton').addEventListener('click', function () {
  if (swiper.activeIndex === 2 && swiper2.activeIndex === 1) {
    swiper2.slidePrev();
  } else if (swiper.activeIndex === 2 && swiper2.activeIndex === 2) {
    swiper2.slidePrev();
  }
  else if (swiper.activeIndex === 5 && swiperCard.activeIndex === 3) {
    swiperCard.slidePrev();
  }
  else if (swiper.activeIndex === 5 && swiperCard.activeIndex === 2) {
    swiperCard.slidePrev();
  }
  else if (swiper.activeIndex === 5 && swiperCard.activeIndex === 1) {
    swiperCard.slidePrev();
  }
  else {
    swiper.slidePrev();
  }
});

swiper.on('slideChange', function () {
  if (this.isBeginning) {
    document.getElementById('customPrevButton').classList.add('disabled');
  } else {
    document.getElementById('customPrevButton').classList.remove('disabled');
  }
  if (this.isEnd) {
    document.getElementById('customNextButton').classList.add('disabled');
  } else {
    document.getElementById('customNextButton').classList.remove('disabled');
  }
});

var swiperContainers = document.querySelectorAll('.mySwiperCard1, .mySwiper2');

swiperContainers.forEach(function (container) {
  var startX, startY, endX, endY;
  var swipeProcessed = false; // Create a separate flag for each swiper container
  var lastScrollTop = 0;

  container.addEventListener('touchstart', function (event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
    swipeProcessed = false; // Reset the flag when a new swipe starts
  });

  container.addEventListener('touchmove', function (event) {
    endX = event.touches[0].clientX;
    endY = event.touches[0].clientY;

    var diffX = startX - endX;
    var diffY = startY - endY;

    if (!swipeProcessed && Math.abs(diffX) > Math.abs(diffY)) { // Check the flag here
      if (diffX > 0) {
        document.getElementById('customNextButton').click();
      } else {
        document.getElementById('customPrevButton').click();
      }
      swipeProcessed = true; // Set the flag when a swipe is processed
    } else if (!swipeProcessed) { // Check the flag here
      if (diffY > 0) {
        document.getElementById('customNextButton').click();
      } else {
        document.getElementById('customPrevButton').click();
      }
      swipeProcessed = true; // Set the flag when a swipe is processed
    }
  });

  container.addEventListener('wheel', function (event) {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (!swipeProcessed) {
      if (event.deltaY > 70) {
        // Scrolled down, trigger next button
        console.log("down")
        document.getElementById('customNextButton').click();
      } else if (event.deltaY <-70) {
        // Scrolled up, trigger previous button
        console.log("up")
        document.getElementById('customPrevButton').click();
      }
      swipeProcessed = true; // Set the flag when a swipe is processed
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    // Reset the flag after a delay to allow multiple swipes
    setTimeout(function () {
      swipeProcessed = false;
    }, 500);
  });
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

var imgs = document.querySelectorAll('.image-container img');

imgs.forEach(function (img) {
  img.addEventListener('click', function () {
    var overlay = document.getElementById('overlay');
    var fullscreenImage = document.getElementById('fullscreenImage');
    fullscreenImage.src = this.src;
    overlay.style.display = 'block';
    console.log("hi")
  });
});

var closeButton = document.getElementById('close-img');
closeButton.addEventListener('click', function () {
  var overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});

// Add an event listener to the document
document.addEventListener('click', function (event) {
  var overlay = document.getElementById('overlay');

  // Check if the click is outside the overlay
  if (event.target == overlay) {
    // Trigger the close button
    closeButton.click();
  }
});


