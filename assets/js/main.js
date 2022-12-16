///////////////////////////////////////////
// settings
var onePageSite = 1;

///////////////////////////////////////////
// Animate Scroll
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('.js-scroll[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $('.preload').delay(1000).fadeOut();

  //no webp navigators
  var isSafari = window.safari !== undefined;
  if (isSafari) $('body').addClass('no-webp');

  var es_ie = navigator.userAgent.search("MSIE") >= 0;
  if (es_ie) $('body').addClass('no-webp');

  var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
  if (isIE11) $('body').addClass('no-webp');

  var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  if (iOS) $('body').addClass('no-webp');
})(jQuery); // End of use strict
///////////////////////////////////////////
//Sticky Header
// When the user scrolls the page, execute stickyMenu
window.onscroll = function () { stickyMenu() };
$(function () {
  stickyMenu();
});

var scrollPos = 0;
window.addEventListener('scroll', function () {
  if ((document.body.getBoundingClientRect()).top > scrollPos) {
    // ARRIBA
    header.classList.add("scroll-top");
    header.classList.remove("scroll-down");
  } else {
    // ABAJO
    header.classList.add("scroll-down");
    header.classList.remove("scroll-top");
  }
  scrollPos = (document.body.getBoundingClientRect()).top;
});

// Get the header
var header = document.getElementById("navHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyMenu() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

///////////////////////////////////////////
// Open menu in responsive
$(function () {
  $('.responsiveMenu').click(function (event) {
    openMenu();
  });
});
function openMenu() {
  var menuClass = ".menu-main";
  if ($(menuClass).hasClass('open')) {
    $(menuClass).removeClass('open');
    $('.responsiveMenu').removeClass('open');
  } else {
    $(menuClass).addClass('open');
    $('.responsiveMenu').addClass('open');
  }
}

//quit menu responsive onclick
$(function () {
  quitMenuResponsive();
});
$(window).resize(function () {
  quitMenuResponsive();
});
function quitMenuResponsive() {
  if ($(window).width() <= 900) {
    $('.menu-main > ul > li > a:not(.submenu)').click(function (event) {
      openMenu();
    });
    $('.menu-main > ul > li > a.submenu').click(function (event) {
      submenu = $(this).siblings('ul');

      if (submenu.css('display') == 'none') {
        submenu.show();
      } else {
        submenu.hide();
      }

      return false;
    });
  } else {
    $('.menu-main > ul > li > a.submenu').siblings('ul').show();
  }
}

/*********** Advanced Search Button */
$(function () {
  $('section#search-home .advanced-serch .flex').click(function () {
    $(this).hide();
    $('.gTThrg').addClass('open');
  });
});

/********************** Open menu mallorca */
$(function () {
  $('a.open-menu').click(function () {
    var menu = $('.llDvji');
    if (menu.hasClass('open')) {

      menu.removeClass('open');
      menu.css('transition-delay', '0.4s');
      $('.llDvji a').each(function (index) {
        var cuenta = ($('.llDvji ul li').length - (index + 1)) + 1;
        $(this).css('transition-delay', formadorIndice(cuenta));
      })

    } else {

      menu.addClass('open');
      menu.css('transition-delay', '0s');
      $('.llDvji a').each(function (index) {
        var cuenta = index;
        $(this).css('transition-delay', formadorIndice(cuenta));
        $(this).attr('data-index', index);
        if ((index + 1) == $('.llDvji ul li').length) {
          setTimeout(allTransition0, index + '00');
        }
      })

    }
    return false;
  })
});

function formadorIndice(cuenta) {
  if (cuenta < 10) {
    var indice = '0.' + cuenta + 's';
  } else {
    var indice = String(cuenta).substr(-2, 1) + "." + String(cuenta).substr(-1) + "s";
  }
  return indice;
}

function allTransition0() {
  $('.llDvji a').each(function (index) {
    var cuenta = index;
    $(this).css('transition-delay', '0s');
  })
}

