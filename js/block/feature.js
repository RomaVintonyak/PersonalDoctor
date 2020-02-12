jQuery(document).ready(function(){
    "use script";
    var elemCount = $(".feature__count");
    var setTime = 20000;
    elemCount.each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: setTime,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});