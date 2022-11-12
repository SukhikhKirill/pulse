$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1100,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/slider/left-arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/slider/right-arrow.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  dots: true
                }
            }
        ]
    });
});