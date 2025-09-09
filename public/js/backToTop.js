!function(s) {
  "use strict";

  // Toggle light mode
  s(".switch").on("click", function() {
    s("body").hasClass("light") 
      ? (s("body").removeClass("light"), s(".switch").removeClass("switched")) 
      : (s("body").addClass("light"), s(".switch").addClass("switched"));
  });

  s(document).ready(function() {
    // Select the progress-wrap path element
    var e = document.querySelector(".progress-wrap path");
    if (!e) {
      console.error("Element '.progress-wrap path' not found");
      return; // Exit if the element doesn't exist
    }

    // Get the total length of the path
    var t = e.getTotalLength();
    e.style.transition = e.style.WebkitTransition = "none";
    e.style.strokeDasharray = t + " " + t;
    e.style.strokeDashoffset = t;
    e.getBoundingClientRect();
    e.style.transition = e.style.WebkitTransition = "stroke-dashoffset 10ms linear";

    // Update the strokeDashoffset on scroll
    var o = function() {
      var o = s(window).scrollTop(),
          r = s(document).height() - s(window).height(),
          i = t - (o * t / r);
      e.style.strokeDashoffset = i;
    };

    o();
    s(window).scroll(o);

    // Show/hide progress-wrap on scroll
    jQuery(window).on("scroll", function() {
      jQuery(this).scrollTop() > 50 
        ? jQuery(".progress-wrap").addClass("active-progress") 
        : jQuery(".progress-wrap").removeClass("active-progress");
    });

    // Scroll to top on progress-wrap click
    jQuery(".progress-wrap").on("click", function(s) {
      s.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, 550);
      return false;
    });
  });
}(jQuery);