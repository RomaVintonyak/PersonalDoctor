jQuery(document).ready(function () {
    "use script"
    $(function () {
        $(window).on("scroll resize", function () {
            var prog =
                $(window).scrollTop() / ($(document).height() - $(window).height());
            $(".progress__bar").css({
                width: ((100 * prog) | 0) + "%"
            });
        });
    });
});