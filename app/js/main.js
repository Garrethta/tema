$(function () {



    $('.tab__link').on('click', function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('tab__link--active');
        $($(this).parent().siblings().find('.tab')).removeClass('tab--active');
        $(this).addClass('tab__link--active');
        $($(this).attr('href')).addClass('tab--active');
    });

    $('.custom').styler()

    $('.courses__tab-link').magnificPopup()



    $('.courses__popup-slider-items').slick({
        arrows: true,
        prevArrow: '<div class="courses__arrow-prev"></div>',
        nextArrow: '<div class="courses__arrow-next"></div>',
        dots: true,
        dotsClass: "courses__dots"
    })
    $('.courses__tab-link').on('click', function (e) {
        $('.courses__popup-slider-items').slick('setPosition')
        $('body').addClass('popup-open')
    })
    // $('.mfp-bg').on('click', function (e) {
    //     $('body').removeClass('popup-open')
    // })
    $('.courses__popup-back').on("click", function () {
        $.magnificPopup.close();
    });
});