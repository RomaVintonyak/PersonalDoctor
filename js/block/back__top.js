jQuery(document).ready(function () {
    "use script";
    var scrollBtn = $("#backTop");
    scrollBtn.hide();
    $(window).on("scroll", function () {
        if ($(this).scrollTop() >= 200) {
            scrollBtn.fadeIn(1000);
        } else {
            scrollBtn.fadeOut(1000);
        }
    });
    scrollBtn.on("click", function (event) {
        event.preventDefault();
        $(".burger__icon").removeClass("open");
        $(".mobile__menu").removeClass("mobile__menu--open");
        $("html, body").animate({
            scrollTop: 0
        }, 2000);
    });
});