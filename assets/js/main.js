jQuery(function($) {
  const item = document.querySelector('.question__list__item');
  const active = 'question__list__item--active';
  const contact = $('#contact').offset().top;
  // acordion
  $('.question__list__item dt').on('click', function() {
    $(this).next().slideToggle();
  });
  // arrow
  $('.question__list__item dt').on('click', function() {
    $(this).parent().toggleClass(active);
  });
  //scroll
  $('a[href^="#"]').click(function() {
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
