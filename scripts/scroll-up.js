var lastScrollPosition = 0;

$('#scroll-up').click(function() {
    if ( $(document).scrollTop() > 0 ) {
        $('html, body').animate({scrollTop: 0}, 1000);
        lastScrollPosition = $(document).scrollTop();
    } else {
        $('html, body').animate({scrollTop: lastScrollPosition}, 1000);
    }
});

$(document).scroll(function() {
    if ( $(document).scrollTop() > 0) {
        $('#scroll-up').fadeIn(1000);
        $('#scroll-up').text('UP');
    } else {
        $('#scroll-up').text('DOWN');
    }
});