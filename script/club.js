$(function () {
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn();
        $('.tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
});

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.topbtn').fadeIn();
    } else {
        $('.topbtn').fadeOut();
    }
});

$('.topbtn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
});

