jQuery(document).ready(function(){
    "use script"
    var elemCount = $(".feature__count");
    elemCount.each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 6000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});