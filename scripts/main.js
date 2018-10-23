
$(document).ready(function(){
    // Slick slider
    $('.nav-blog').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 6
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 6
                }
            }
        ]
    });
    // Fnc for menu
    function openNavigation() {
        if ($(window).width() <= 991) {
            $('.box-nav .module-nav .nav-content__title').on('click', function (e) {
                e.preventDefault();
                $(this).parent().find('.nav-content__inner').stop()
                    .slideToggle(400, function () {
                        $('.nav-blog').slick('destroy');
                        $('.nav-blog').slick({
                            infinite: true,
                            slidesToShow: 8,
                            variableWidth: true,
                            slidesToScroll: 1,
                            prevArrow: $('.prev'),
                            nextArrow: $('.next')

                        });
                    });
            })
        }
    }
    openNavigation();
    // fnc check resizable
    $(window).resize(function(){
        openNavigation();
    });
});