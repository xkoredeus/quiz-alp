$(function() {
  $('.popup_quiz__bot').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    var carousel = e.relatedTarget;
    $('.popup_quiz__num').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
  });
  $('.popup_quiz__bot').owlCarousel({
    nav: true,
    loop: false,
    dots: false,
    mouseDrag: false,
    smartSpeed: 800,
    navText: ["<div class='d-flex align-items-center'><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg><span class='ml-2'>Назад</span></div>","<div class='d-flex align-items-center'><span class='mr-2'>Вперед</span><svg width='11' height='18' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg></div>"],
    items: 1,
  });
  $('.popup_quiz__bot .checkbox').on('click', function() {
    $('.popup_quiz__bot .owl-next').trigger('click');
  })
  $('[data-fancybox]').fancybox({
    animationDuration : 600,
    animationEffect   : 'slide-in-out',
    touch : false
  });
  $('.quiz__tel').mask('+7 (999) 999-99-99');
});