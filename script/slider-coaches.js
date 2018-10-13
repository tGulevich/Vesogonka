$(function(){
    $(window).on('load resize orientationchange', function() {
        $('.coaches').each(function(){
            var $carousel = $(this);
            /* Initializes a slick carousel only on mobile screens */
            // slick on mobile
            if ($(window).width() > 768) {
                if ($carousel.hasClass('slick-initialized')) {
                    $carousel.slick('unslick');
                }
            }
            else{
                if (!$carousel.hasClass('slick-initialized')) {
                    $carousel.slick({
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        prevArrow: '<button class="command__arrow command__arrow--prev"><img class="command__arrow__icon" src="img/SVG/chevron-thin-left.svg"></button>',
                        nextArrow: '<button class="command__arrow command__arrow--next"><img class="command__arrow__icon" src="img/SVG/chevron-thin-right.svg"></button>',
                        mobileFirst: true,
                    });
                }
            }
        });
    });


    /*
    $('.coaches').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="command__arrow command__arrow--prev"><img class="command__arrow__icon" src="img/SVG/chevron-thin-left.svg"></button>',
        nextArrow: '<button class="command__arrow command__arrow--next"><img class="command__arrow__icon" src="img/SVG/chevron-thin-right.svg"></button>',
        mobileFirst: true,
        responsive: [
            {
              breakpoint: 600,
              settings: 'unslick'
            }
          ]

    });
    */
});


