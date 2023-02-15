(function ($) {
  Drupal.behaviors.bpNumbers = {
    attach: function (context, settings) {

      const CounterNumber = () => {
        if (document.getElementsByClassName('numbers').length > 0) {
          var observer = new IntersectionObserver(function(entries) {
            // isIntersecting is true when element and viewport are overlapping
            // isIntersecting is false when element and viewport don't overlap
            if(entries[0].isIntersecting === true)
              $('.counter-anime').each(function () {
                $(this).prop('Counter',0).animate({
                  Counter: $(this).text()
                }, {
                  duration: 4000,
                  easing: 'swing',
                  step: function (now) {
                    $(this).text(Math.ceil(now));
                  }
                });
              });
          }, { threshold: [0] });
          observer.observe(document.querySelector(".numbers"));
        }
      }

      //export { CounterNumber };

    }
  };
})(jQuery);
