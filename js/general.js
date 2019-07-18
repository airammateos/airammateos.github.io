$(document).ready(function() {
  AOS.init({
    once: false
  });

  $.fn.setActiveMenu = function() {
    $('.navbar li').removeClass('active');
    var li = $(this).closest('li');
    (!li) ? $('.navbar-nav li').eq(0) : li.addClass('active');
  };

  $('[name="back-to-top"]').on('click', function(){
    $('body,html').animate({
			scrollTop: 0
		}, 600);
  });

  $('a.smooth-scroll').click(function(event) {
    if (location.pathname.replace(/^\//, '') !== this.pathname.replace(/^\//, '') ||
        location.hostname !== this.hostname
    ) {
      return;
    }

    // Figure out element to scroll to
    var target = $(this.hash);
    target     = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (!target.length) {
      return;
    }

    $(this).setActiveMenu();

    // Only prevent default if animation is actually gonna happen
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top - $('.navbar').css('height').replace('px','')
    }, 1000, function() {
      var $target = $(target);
      $target.focus();
      if ($target.is(":focus")) {
        return;
      }
      $target.attr('tabindex','-1');
      $target.focus();
    });
  });

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($('nav').offset().top > 200) {
      $('.back-to-top').fadeIn('slow');
      $(".navbar-fixed-top").addClass("top-nav-collapse");
      $(".navbar-fixed-top").removeClass("navbar-transparent");
    } else {
      setTimeout(() => {
        if($('nav').offset().top < 200) {
          $('.back-to-top').fadeOut('slow');
          $('.navbar li').removeClass('active');
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
          $(".navbar-fixed-top").addClass("navbar-transparent");
        }
      }, 400);
    }
  });
  
});
