let slides = document.querySelectorAll('.test-slide');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let dotsWrap = document.querySelector('.dots');
let dots = document.querySelectorAll('.dot');
let slideIndex = 1;
let checkBtn = document.querySelector('.check-btn');
let checkBlock = document.querySelectorAll('.btn-view');
let humburger = document.querySelector('.humburger');
let navigation = document.querySelector('.navigation');
let overlayHumburger = document.querySelector('.grey-container');
let closeHumberger = document.querySelector('.close');
let carusel = document.querySelector('.test-carusel');

//////slider/////

    showSlides(slideIndex, 0);
    function showSlides(n, position) {
      if (n > slides.length){
        slideIndex = 1;
        position = 0;
      }
      if (n < 1) {
        slideIndex = slides.length;
        position=(-(slideIndex-1)*100);
      }
      carusel.style.transform = `translateX(${(-(n-1)) * position}%)`
      dots.forEach((item) => item.classList.remove('dot-active'));

      dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
      showSlides(slideIndex += n,100);
    }
    function currentSlide(n) {
      showSlides(slideIndex = n,100);
    }

    prev.addEventListener('click', function() {
      plusSlides(-1);
    });

    next.addEventListener('click', function() {
      plusSlides(1);
    });
    dotsWrap.addEventListener('click', function(event) {
      for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
          currentSlide(i);
        }
      }
    });
////btn-view////
    checkBtn.addEventListener('click', function() {
      checkBlock.forEach((item)=>item.classList.add('check-view'));
    });
////humburger//////
    humburger.addEventListener('click', function(){
      closeHumberger.classList.add('show');

      navigation.classList.add('active');
      overlayHumburger.classList.add('overlay');
    });
    closeHumberger.addEventListener('click', function(){
      navigation.classList.remove('active');
      overlayHumburger.classList.remove('overlay');
      closeHumberger.classList.remove('show');

    });