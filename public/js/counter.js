function visible(element) {
  const $element = $(element);

  // Check if the element exists
  if ($element.length === 0) {
    console.error("Element not found:", element);
    return false; // Exit if the element doesn't exist
  }

  const offset = $element.offset();

  // Check if the offset is defined
  if (!offset) {
    console.error("Offset is undefined for element:", element);
    return false; // Exit if offset is undefined
  }

  const top = offset.top;
  const bottom = top + $element.height();
  const viewportTop = $(window).scrollTop();
  const viewportBottom = viewportTop + $(window).height();

  return bottom > viewportTop && top < viewportBottom;
}

$(document).ready(function () {
  const $counterElements = $(".counter");

  // Warn if no elements with the class '.counter' are found
  if ($counterElements.length === 0) {
    console.warn("No elements with class '.counter' found.");
    return;
  }

  const updateCounters = function () {
    $counterElements.each(function () {
      if (visible(this)) {
        const $this = $(this);
        const countTo = $this.data("count");

        // Prevent re-counting by adding a 'counted' class
        if (!$this.hasClass("counted")) {
          $this.addClass("counted");
          $({ countNum: $this.text() }).animate(
            { countNum: countTo },
            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              },
            }
          );
        }
      }
    });
  };

  // Initial counter update
  updateCounters();

  // Update counters on scroll
  $(window).on("scroll", updateCounters);
});