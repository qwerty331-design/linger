var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".mySwiper .swiper-pagination",
    type: "progressbar",
  },

  navigation: {
    nextEl: ".mySwiper .swiper-button-next",
    prevEl: ".mySwiper .swiper-button-prev",
  },
});

var swiper2 = new Swiper(".slide_3din", {
  slidesPerView: "auto",
  spaceBetween: 0,
  centeredSlides: true,
  // loop: true,
  shadow: 0,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 100,
    depth: 230,
    //modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".slide-3d .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".slide-3d .swiper-button-next",
    prevEl: ".slide-3d .swiper-button-prev",
  },
});

var swiper = new Swiper('.store .store_inner ', {
  slidesPerView: 5,//보여지는 갤러리 수
  spaceBetween: 10,//갤러리 사이 간격
  speed: 1500,//버튼을 슬라이드가 넘어가는 시간
  autoplay: {
    delay: 3000,//자동으로 넘어가기 전 머무르는 시간
    disableOnInteraction: false,
  },
  loop: true,//슬라이드 무한반복
  navigation: {//화살표 버튼
    nextEl: '.store .swiper-button-next',
    prevEl: '.store .swiper-button-prev',
  },
  pagination: {//블릿 버튼
    el: '.store .swiper-pagination',
    // clickable: true,
    type: "progressbar",
  },
});

$(function () {
  // 기본
  $("#scroller").simplyScroll({
    speed: 1,
  });

});

$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $('.top').fadeIn();
  } else {
    $('.top').fadeOut();
  }
});

$('.top').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 400);
  return false;
});

// IntersectionObserver 를 등록한다.
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // 관찰 대상이 viewport 안에 들어온 경우 'on' 클래스를 추가
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('on');
    }
    // 그 외의 경우 'on' 클래스 제거
    else {
      entry.target.classList.remove('on');
    }
  });
});

// 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
const boxElList = document.querySelectorAll('.highlight');
boxElList.forEach((el) => {
  io.observe(el);
});

AOS.init({
  duration: 1200 //aos 나타나는 속도
});

$(document).ready(function () {
  $(".hover-video").hover(
    function () {
      this.play(); // 마우스를 올리면 재생
    },
    function () {
      this.pause(); // 마우스를 떼면 일시정지
      this.currentTime = 0; // 재생 위치 초기화
    }
  );
});

// script.js
document.addEventListener("scroll", () => {
  const scrollTop = window.scrollY; // 스크롤된 높이
  const triggerHeight1 = 700; // 첫 번째 선 기준 높이
  const triggerHeight2 = 700; // 두 번째 선 기준 높이
  const maxWidth = 511; // 선의 최대 너비

  const line1 = document.querySelector(".line1");
  const line2 = document.querySelector(".line2");

  // 첫 번째 선
  if (scrollTop >= triggerHeight1) {
    line1.style.width = `${maxWidth}px`;
  } else {
    const percentage1 = (scrollTop / triggerHeight1) * maxWidth;
    line1.style.width = `${percentage1}px`;
  }

  // 두 번째 선
  if (scrollTop >= triggerHeight2) {
    line2.style.width = `${maxWidth}px`;
  } else {
    const percentage2 = (scrollTop / triggerHeight2) * maxWidth;
    line2.style.width = `${percentage2}px`;
  }
});

