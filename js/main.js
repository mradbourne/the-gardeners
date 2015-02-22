
// header slider
$("#sliderOne").royalSlider({
  usePreloader: true,
  globalCaption: true,
  arrowsNav: false,
  controlsInside: false,
  autoHeight: true,
  imgHeight: 450,
  fadeinLoadedSlide: false, 
  controlNavigation: 'none',
  loop: true,
  autoPlay: {
    enabled: false,
    pauseOnHover: true,
    delay: 4000
  }
});
var headerSlider = $("#sliderOne").data('royalSlider');
headerSlider.ev.on('rsBeforeAnimStart', function(event) {
    // before animation between slides start
    $('.rsCaption *').css({opacity: 0.0});
});
headerSlider.ev.on('rsAfterSlideChange', function(event) {
    // triggers after slide change
    $('.rsCaption *').animate({opacity: 0.99},1000);
});

// services slider
$(window).load(function() {
  $("#sliderTwo, #sliderThree").royalSlider({
    autoHeight: true,
    autoScaleSlider: false,
    imageScaleMode: 'none',
    imageAlignCenter: false,
    arrowsNavAutoHide: false,
    controlNavigation: 'none',
    loop: true,
    controlsInside: false
  });
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('body').on('click', '.page-scroll a', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top + parseInt($('section').css('padding-top')) - $('.navbar-header').height() - parseInt($('.navbar').css('padding-top')) - parseInt($('.navbar').css('padding-bottom'))
    }, 1500, 'easeInOutExpo');
    if ($anchor.attr('href') == '#page-top') {
      $("#sliderOne").royalSlider('goTo','0').royalSlider('startAutoPlay');
    }
    event.preventDefault();
  });
});

// Floating label headings for the contact form
$(function() {
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top',
  offset: 180 //130 is the actual top
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});
