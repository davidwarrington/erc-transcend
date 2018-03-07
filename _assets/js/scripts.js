$(document).ready(function () {

    // if (window.location.pathname === '/') {
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
    // }

    if ($('.portfolio-item--desc').length) {
        // $('.portfolio-item--details').hover(function (e) {
        //     $(this).find('.portfolio-item--desc').toggle();
        // });
    }


});