/**
 * @file
 */

(function ($) {
  Drupal.behaviors.owl = {
    attach: function (context, settings) {
      $('.owl-carousel', context).each(function () {
        var mobile = $(this).attr('data-mobile');
        var desktop = $(this).attr('data-desktop');

        $(this).owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          responsive: {
            0: {
              items: mobile
            },
            768: {
              items: desktop
            }
          }
        });
      });
    }
  };
})(jQuery);
