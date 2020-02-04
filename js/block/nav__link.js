jQuery(document).ready(function(){
    "use script"
    var navLink = $(".nav__link");
    navLink.on("click", function(){
        $(this).toggleClass("nav__link--active");
    });
});