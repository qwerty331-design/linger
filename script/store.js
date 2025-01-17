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