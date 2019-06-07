$(window).on('load', function() {
  var headerHeight = $('.header-container').height();
  var screen = $(window).innerWidth();
  var logocontainerHeight = $('.logo-container').height();
  if (screen > 991){
    $('body').css({'padding-top': headerHeight + 'px' })
  } else {
    $('body').css({'padding-top': logocontainerHeight + 'px' })

  }
  $('.toggle-menu').click(function() {
    if ($(this).hasClass('active')) {
      // co
      $('.nav-menu').removeClass('active') // dong menu
      $('.logo-container').removeClass('active') //chuyen mau header ve mac dinh
      $('.search-container').removeClass('active')
      $(this).removeClass('active') //dong nut
    } else {
      //khong
      $('.nav-menu').addClass('active') // dong menu
      $('.logo-container').addClass('active') //chuyen mau header ve mac dinh
      $('.search-container').addClass('active')
      $(this).addClass('active') //dong nut
    }
  })

  $('.video-news').click(function(e) {
    var slideno = $(this).data('slide'); // lay index item se slide den
    $('.video-news').removeClass('active') // remove class active
    $(this).addClass('active')// them class active cho thanh phan vua click
    $('.slider2').slick('slickGoTo', slideno - 1); // slide to index
  });

  if (screen < 991) { // chi danh cho mobile

    $('.has-sub-menu').on('click',  function() {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active')
        $(this).find('.sub-menu').css({height: 0})
      } else {
        $('.has-sub-menu').removeClass('active')
        $('.sub-menu').css({height: 0})
        $(this).addClass('active')
        var itemHeight = $('.sub-menu .menu-item').innerHeight() + 1;
        var itemSubmenu = $(this).find('.menu-item').length
        $(this).find('.sub-menu').css({height: itemSubmenu * itemHeight +'px'})
      }

    })
  }
})

$(window).resize(function(){
  var headerHeight = $('.header-container').height();
  var logocontainerHeight = $('.logo-container').height();
  var screen = $(window).innerWidth();
  if (screen > 991){
    $('body').css({'padding-top': headerHeight + 'px' })
  } else {
    $('body').css({'padding-top': logocontainerHeight + 'px' })
  }
})



$(document).ready(function(){
  $(".slider").slick({
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false
        }
      }
    ]
  });

  $('.autoplay').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }},
        {
        breakpoint: 320,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }
    ]
  });

  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".slider2").slick({
    swipe: false,
    arrows: false
  });
});