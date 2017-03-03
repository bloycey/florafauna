$(document).ready(function(){
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).stop().fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).stop().fadeOut("fast");
    });
    
    $('.bxslider').bxSlider({
        auto: true,
        infinite: true,
        pager: false,
        speed: 1000,
    });
    
    $('.bxslider-why-shop').bxSlider({
  minSlides: 2,
  maxSlides: 2,
  slideWidth: 320,
  slideMargin: 10,
    pager: false,
    auto: true,
    infitnite: true,
});
    
});

