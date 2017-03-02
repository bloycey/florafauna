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
    
});

