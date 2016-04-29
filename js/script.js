$(document).ready(function () {

    $(".button-collapse").sideNav();

    $('.scrollspy').scrollSpy();

    $('.collapsible').collapsible({
        accordion: true
    });

    $('.modal-trigger').leanModal();

    var sliders = $('.sliders');
    var slidersValue = [75, 50, 65, 40, 70, 50, 40, 25, 25, 45, 80, 85, 65, 80];
    $.each(sliders, function (key, value) {
        noUiSlider.create(value, {
            start: slidersValue[key],
            // start: parseInt(Math.random()*100),
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