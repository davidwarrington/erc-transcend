$(document).ready(function () {
    var site_intro = {
        el: $('.site-intro'),
        lower: $('.site-intro--lower'),
        upper: $('.site-intro--upper')
    };
    
    site_intro.lower.on('animationend', function () {
        site_intro.el.hide();
    });
});