// ------button menu--------
var Menu = {
    el: {
      ham: $('.menu__btn'),
      menuTop: $('.line-top'),
      menuBottom: $('.line-bottom')
    },
    init: function() {
      Menu.bindUIactions();
    },
    bindUIactions: function() {
      Menu.el.ham
          .on(
            'click',
          function(event) {
          Menu.activateMenu(event);
          event.preventDefault();
        }
      );
    },
    activateMenu: function() {
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


// ---slider sink-----
$('.sink__slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

