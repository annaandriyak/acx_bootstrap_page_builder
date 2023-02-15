/**
 * @file
 * JavaScript file for the AOS module.
 */

(function ($, Drupal) {

  Drupal.behaviors.aos = {
    attach: function attach(context, settings) {
      AOS.init();
    }
  };

})(jQuery, Drupal);
