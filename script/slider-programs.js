$(function(){
    if ( $(window).width() >= 1800 ) {

        $('.program').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1
        });
    } else if ( $(window).width() > 900 && $(window).width() <= 1799 ) {
        $('.program').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    } else if ( $(window).width() > 600 && $(window).width() <= 900 ) {
        $('.program').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1
        });
    } else if ( $(window).width() <= 600 ) {
        $('.program').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }
    
    /*
    var left = document.querySelector('.program__btn-arrow--left');
    var right = document.querySelector('.program__btn-arrow--right');
    var programs = document.querySelectorAll('.program__box');
    var program = document.querySelector('.program__box');
    var activeElements = document.querySelectorAll('.program__box--active');
    var hiddenElements = document.querySelector('.program__box--hidden');

    $(".program__btn-arrow--right").on('click', function() {

        console.log($(".program__box--active"));
        
        if($(".program__box--active").next(".program__box--hidden").hasClass("program__box--hidden")) {
            
            $(".program__box--active").first().toggleClass("program__box--active program__box--hidden");       
            $(".program__box--active").next(".program__box--hidden").toggleClass("program__box--hidden program__box--active");

        } else {
            $(".program__box--active").first().toggleClass("program__box--active program__box--hidden");
            $(".program__box--hidden").first().appendTo($(".program__box__list"));
            $(".program__box--active").next(".program__box--hidden").toggleClass("program__box--hidden program__box--active");
            
        }
        
    });

    left.addEventListener('click', function() {

        if($(".program__box--active").prev(".program__box--active").hasClass("program__box--hidden")) {
            $(".program__box--active").last().toggleClass("program__box--active program__box--hidden");
            $(".program__box--active").prev(".program__box--hidden").toggleClass("program__box--hidden program__box--active");
            
        } else {
            $(".program__box--active").last().toggleClass("program__box--active program__box--hidden");
            $(".program__box--hidden").last().prependTo($(".program__box__list"));
            $(".program__box--active").prev(".program__box--hidden").toggleClass("program__box--hidden program__box--active");
        }

    });
    */
});