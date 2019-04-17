/*eslint-disable*/
!(function(a) {
  a(document).ready(function() {
    a(".js-navbar-trigger").click(function() {
      a(".navbar-collapse").collapse("hide");
    });
    var n = function() {
      a("#mainNav").offset().top > 100
        ? a("#mainNav").addClass("navbar-shrink")
        : a("#mainNav").removeClass("navbar-shrink");
    };
    n(), a(window).scroll(n);
  });
})(jQuery);
