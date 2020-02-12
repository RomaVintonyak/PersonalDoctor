jQuery(document).ready(function(){
  "use script";
  var acardeon = function () {
    var data = $(".right__acardeon").attr('data-acardeon');
    $(".acardeon__header").on("click", function () {
        if (data === "close") {
            $(".acardeon__body").slideUp();
            if ($(this).hasClass("acardeon__header--active")) {
                $(this).toggleClass("acardeon__header--active");
            } else {
                $(".acardeon__header").removeClass("acardeon__header--active");
                $(this).toggleClass("acardeon__header--active");
            }
        }
        else {
            $(this).toggleClass("acardeon__header--active");
        }
        $(this).next(".acardeon__body").not(":animated").slideToggle();
    });
}
acardeon();
});