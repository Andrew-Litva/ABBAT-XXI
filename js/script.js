// ------menu--------
var Menu = {
  el: {
    ham: $('.menu__btn'),
    menuTop: $('.line-top'),
    menuBottom: $('.line-bottom')
  },
  init: function () {
    Menu.bindUIactions();
  },
  bindUIactions: function () {
    Menu.el.ham
      .on(
        'click',
        function (event) {
          Menu.activateMenu(event);
          event.preventDefault();
        }
      );
  },
  activateMenu: function () {
    Menu.el.menuTop.toggleClass('menu-top-click');
    Menu.el.menuBottom.toggleClass('menu-bottom-click');
  }
};

Menu.init();

$('.menu__btn').on('click', function (e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
});

$('.btn_close-menu').on('click', function (e) {
  e.preventDefault();
  $('.menu').toggleClass('menu-open');
});


// ----animation-----
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 1500, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});


// ------partners__slider------
$('.partners__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
  // autoplay: true,
  // autoplaySpeed: 5000,
  centerMode: false,
  dots: true,
  appendArrows: '.arrow__btn',
  speed: 2000,
});

