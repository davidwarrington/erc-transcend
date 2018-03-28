$(document).ready(function () {

    if ($('.site-intro').length) {
        var site_intro = {
            body: $('body'),
            el: $('.site-intro'),
            lower: $('.site-intro--lower'),
            upper: $('.site-intro--upper'),
        };
        
        site_intro.lower.on('animationend', function () {
            site_intro.el.hide();
            site_intro.body.removeClass('no-scroll');
        });
    }

    lightbox.option({
        showImageNumberLabel: false
    })

});