//メニューをクリックしたらメニューが開く
$('.menu-button').on('click', function(){
  if ($('.menu-command').hasClass('menu-open')) {
    $('.menu-command').removeClass('menu-open');
  } else {
    $('.menu-command').addClass('menu-open');
  }
});

// メニューのアンカーをクリックしたらメニューが閉じる
$('.ancer').on('click', function(){
  if ($('.menu-command').hasClass('menu-open')) {
    $('.menu-command').removeClass('menu-open');
  }
});

// メニューの背景をクリックしたらメニューが閉じる
$('.bg').on('click', function(){
  if ($('.menu-command').hasClass('menu-open')) {
    $('.menu-command').removeClass('menu-open');
  }
});

// スクロールしたらaboutのテキストと写真がフェードインしてくる
const aboutMessage = document.querySelector('.about-message');
const aboutImg = document.querySelector('.about-img');

const cb = function(entrise, observer) {
  entrise.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}
const io = new IntersectionObserver(cb);
io.observe(aboutMessage);
io.observe(aboutImg);

// pick upのカルーセル実装
let swiper = new Swiper("#pick-up", {
  spaceBetween: 100,
  centeredSlides : true,
  freeMode: true,
  freeModeSticky: true,
  slidesPerView: 1.5,
  speed: 300,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    900: {
      slidesPerView: 3.5,
      spaceBetween: 40,
      loop: true,
      speed: 5000,
      autoplay: {
        delay: 0,
      },
    }
  }
});

// スクロースしたらdiaryの記事がフェードインしてくる
$(window).scroll(function() {
  $('.diary-block').each(function() {
    let scroll = $(window).scrollTop();
    let target = $(this).offset().top;
    if (scroll > target - 350) {
      $(this).css('opacity', '1');
      $(this).css('transform', 'translateY(0)');
      $(this).css('transition', 'all 0.3s');
    }
  });
});
