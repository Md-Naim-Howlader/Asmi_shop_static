$(document).ready(function () {
  $("#menu-btn").click(function () {
    if (window.innerWidth < 992) {
      // Mobile Offcanvas
      $("#mobile-offcanvas").toggleClass("active");
    } else {
      // Desktop Sidebar Toggle
      $("#sidebar").toggleClass("active");

      if ($("#sidebar").hasClass("active")) {
        $("#sidebar").css("left", "0");
        $("#main-content").css("margin-left", "230px");
      } else {
        $("#sidebar").css("left", "-230px");
        $("#main-content").css("margin-left", "0");
      }
    }
  });
});

// accordion
$(document).ready(function () {
  $(".cat-link").click(function (e) {
    e.preventDefault();

    let parent = $(this).parent();

    if (parent.hasClass("open")) {
      return; // same item click করলে hide হবে না
    }

    $(".cat-item").removeClass("open");
    $(".submenu").slideUp(200);

    parent.addClass("open");
    parent.find(".submenu").slideDown(200);
  });
});

