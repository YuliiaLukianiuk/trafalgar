let slides = document.querySelectorAll('.test-slide'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.dots'),
    dots = document.querySelectorAll('.dot'),
    slideIndex = 1,
    checkBtn = document.querySelector('.check-btn'),
    checkBlock = document.querySelectorAll('.btn-view'),
    humburger = document.querySelector('.humburger'),
    navigation = document.querySelector('.navigation'),
    overlayHumburger = document.querySelector('.grey-container'),
    closeHumberger = document.querySelector('.close')

    
// console.log(prev)
    showSlides(slideIndex);
    function showSlides(n) {
      if (n > slides.length){
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      slides.forEach((item) => item.style.display = 'none');
      dots.forEach((item) => item.classList.remove('dot-active'));

      slides[slideIndex - 1].style.display = 'flex';
      dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
      console.log('START')
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

    checkBtn.addEventListener('click', function() {
      checkBlock.forEach((item)=>item.classList.add('check-view'));
    });

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