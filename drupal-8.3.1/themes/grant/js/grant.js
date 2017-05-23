! function($) {
    $(document).ready(function() {
        //-Slick Carousel
        $('.single-item').slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
        
    //-- Scroll to
        $('#go-to-tagline-text').on('click', function(e){
            e.preventDefault()
            $.scrollTo('#block-taglinetext', 800);
        });

        
    });
}(jQuery);

//$('.autoplay').slick({
           // dots: true,
           // slidesToShow: 1,
           // slidesToScroll: 1,
           // autoplay: true,
           // autoplaySpeed: 5000
        //});