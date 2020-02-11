jQuery(document).ready(function() {
  "use script";
  var catScroll = $(".cat__scroll");
  catScroll.on("click", function(event) {
    event.preventDefault();
    $(".burger__icon").removeClass("open");
    $(".mobile__menu").removeClass("mobile__menu--open");
    var id = $(this).attr("href"),
      offsetTop = $(id).offset().top;
    $("html, body").animate(
      {
        scrollTop: offsetTop - 100
      },
      800
    );
  });
});
