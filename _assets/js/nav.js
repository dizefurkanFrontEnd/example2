$(window).ready(function() {
  var lastScrollTop = 0;
  $(window).on("scroll", function() {
    var scrollCurrent = $(window).scrollTop();
    var scrollHeight = $(document).height();
    var scrollWidth = $(document).width();
    var scrollPosition = $(window).height() + $(window).scrollTop();

    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        // when scroll to bottom of the page
        $("#shortcutButton").css("display", "block");
    }
    
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
      // downscroll code
      $("header").addClass("off");
    } else {
      // upscroll code
      $("header").removeClass("off");
     }
     lastScrollTop = st;
  });
});


$(document).ready(function() {
  $("#navBar").click(function() {
    $("#navBar").toggleClass("change");
    $("#nav__linksArea").slideToggle();
  });

  $(".nav__link").click(function() {
    $(this).find(".nav__linkDrowdown").toggle();
  });

  $("#shortcutButton").click(function() {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 600);
  });

  $("#searchLink").click(function() {
    $("#searchArea").toggle();
    $("html, body").css("overflow", "hidden");
  });

  $("#searchAreaExit").click(function() {
    $("#searchArea").toggle();
    $("html, body").css("overflow", "auto");
  });

});
