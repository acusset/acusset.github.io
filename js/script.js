$(document).ready(function () {
    
    $(".button-collapse").sideNav();
    
    $('.scrollspy').scrollSpy();
    
    $('.collapsible').collapsible({
        accordion: true
    });

    $('.modal-trigger').leanModal();

    var sliders = $('.sliders');
    var slidersValue = [10, 20, 30, 40];
    $.each(sliders, function (key, value) {
        noUiSlider.create(value, {
            start: slidersValue[key],
            connect: "lower",
            orientation: "horizontal",
            range: {'min': 0, 'max': 100},
            step: 1,
            animate: false
        });
    });

    $('nav').pushpin({
        top: $('nav').offset().top
    });

    $('.table-of-contents').pushpin({
        top: $('nav').offset().top + $('nav').height(),
        offset: $('nav').height()
    });
});

function openContactModal() {
    $('#contact-modal').closeModal();
}