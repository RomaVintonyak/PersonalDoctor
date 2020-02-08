jQuery(document).ready(function(){
    "use script"
    $(window).on("scroll", function(){
        if($(this).scrollTop() >= 150){
            $("header").addClass("fixed");
        }
        else{
            $("header").removeClass("fixed");
        }
    });
});
