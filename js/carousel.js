/**
 * @file
 */
(function ($) {
  Drupal.behaviors.owl = {
    attach: function (context, settings) {
      $('.owl-carousel', context).each(function () {
        $(this).owlCarousel();
      });
    }
  };
})(jQuery);
