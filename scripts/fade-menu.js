$('.menu-icon').click(function () {
    $('.menu-links').fadeToggle(500);
});

$(window).on('resize', function () {
   if ($(this).width() > 663) {
       $('.menu-links').show();
   } else {
       $('.menu-links').hide();
   }
});


