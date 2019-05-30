//drop-down menu 


$(".logo").click(function() {
  $("nav").toggle("slide", {direction: 'up'}, 500, function() {
        if ($(this).css('display') === 'none') {
         $(this).removeAttr('style');
      }
  })
})


//accordion in about


$(function() {
  $(".accordion" ).accordion({
    collapsible: true,
    active: false
  });
});

$('.drop-button').click(function() {
	$(this).toggleClass("drop-click");
	if ($('.drop-button').hasClass("drop-click")) {
		$('.drop-button').removeClass("drop-click")
		$(this).addClass("drop-click")
	}
})


//carousel in about


$(document).ready(function () {
  var carousel = $(".carousel").waterwheelCarousel({
    flankingItems: 1,
  });

  $('#prev').bind('click', function () {
    carousel.prev();
    return false
  });

  $('#next').bind('click', function () {
    carousel.next();
    return false;
  });
});


//rombs in features-dection


$('.feature-describe').hover(function () {
  $('.romb-complete-black', this).toggle()
  $('.romb-complete-white', this).toggle()
})


//slider in clients 


$('.comment-slider').slick({
  arrows: false,
  dots: true,
  infinite: false,
  slidesToShow: 1,
  adaptiveHeight: true, 
  fade: true,
});

$('.slick-dots li button').click(function() {
  $(this).addClass('toogle-red');
  if ($('.slick-dots li button').hasClass('toogle-red')) {
    $('.slick-dots li button').removeClass('toogle-red')
    $(this).addClass('toogle-red')
  }
})


//hover in services section 


$(document).ready(function () {
  $('.banner').removeClass('banner-red');
  $('.banner').hover(function() {
     $(this).toggleClass('banner-red');
     $(this).parent().next().toggleClass('purpure')
  })
});


//hover in plans section 


$('.plan-order button').hover(function () {
  $(this).parent().prevAll().eq(6).toggleClass('toogle-red-white', 200);
  $(this).parent().prevAll().eq(6).children().toggleClass('toogle-red-white', 200);
}) 


//hover in blogs section 


$('.blog-descripe button').hover(function () {
  $(this).parent().prev().toggleClass('half-opacity', 200)
})


//hover in follow section 



$(document).ready(function () {
  $('.red-circle-romb').removeClass('filled-romb');
  $('.red-circle-romb').hover(function () {
    $(this).toggleClass('filled-romb ')
  })
});
