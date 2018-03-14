$(function() {
  $("#my-menu").mmenu({
    extensions: [ "widescreen", "theme-black", "effect-menu-slide", "pagedim-black"],
    navbar: {
      title: "<img src='img/logo-1.svg' alt='Салон красоты Смитлер'>"
    },
    offCanvas: {
      position: 'right'
    }
  });
  var api = $('#my-menu').data('mmenu');
  api.bind('opened', function () {
    $('.hamburger').addClass('is-active');
  }).bind('closed', function () {
    $('.hamburger').removeClass('is-active')
  });

  $(".carousel-services").on('initialized.owl.carousel', function () {
    setTimeout(function () {
      carouselService()
    }, 100);
  });

  $(".carousel-services").owlCarousel({
    loop: true,
    nav: true,
    smartSpeed: 700,
    navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1100: {
        items: 3
      }
    }
  });


  function carouselService() {
    $('.carousel-services-item').each(function () {
      var ths = $(this),
          thsHeight = ths.find('.carousel-services-content').outerHeight();
      ths.find('.carousel-services-image').css('min-height', thsHeight)
    });
  };
  //Resize Window
  function onResize() {
      $('.carousel-services-content').equalHeights();
  };
  onResize();
  window.onresize = function () {
    onResize();
  };
  $(document).ready(function(){
				//$("#gallery").unitegallery();
        api = $("#gallery").unitegallery();
			});
 $('select').selectize();

 $('.reviews').owlCarousel({
   loop: true,
   items: 1,
   smartSpeed: 700,
   nav: false,
   autoHeight: true
 });

 $('.partners').owlCarousel({
   loop: true,
   smartSpeed: 700,
   nav: true,
   dots: false,
   navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
   responsiveClass: true,
   responsive: {
     0: {
       items: 1
     },
     768: {
       items: 2
     },
     992: {
       items: 3
     },
     1200: {
       items: 4
     }
 }
 });
$("form.callback").submit(function() { //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php", //Change
    data: th.serialize()
  }).done(function() {
    $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
    setTimeout(function() {
      $(th).find('.success').removeClass('active').fadeOut();
      th.trigger("reset");
    }, 3000);
  });
  return false;
});

});
