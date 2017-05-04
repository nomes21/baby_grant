! function($) {
    $(document).ready(function() {
        //-Slick Carousel
        $('.single-item').slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
        
        //-- Sticky Header
        (function() {

            var mainnav = $('.header');

            if (mainnav.length) {
                var elmHeight = $('.header').outerHeight(true);
                $(window).scroll(function() {

                    var scrolltop = $(window).scrollTop();
                    if (scrolltop > elmHeight) {
                        if (!mainnav.hasClass('sticky')) {
                            mainnav.addClass('sticky');
                        }

                    } else {
                        mainnav.removeClass('sticky');
                    }
                })
            }
        })();
        
    });
}(jQuery);

//$('.autoplay').slick({
           // dots: true,
           // slidesToShow: 1,
           // slidesToScroll: 1,
           // autoplay: true,
           // autoplaySpeed: 5000
        //});