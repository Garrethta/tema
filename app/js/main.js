$(function () {



    $('.tab__link').on('click', function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('tab__link--active');
        $($(this).parent().siblings().find('.tab')).removeClass('tab--active');
        $(this).addClass('tab__link--active');
        $($(this).attr('href')).addClass('tab--active');
    });

    $( '.custom' ).styler()

    $('.courses__tab-link').magnificPopup()

    $('.courses__popup-slider-items').slick({
        
    })

});