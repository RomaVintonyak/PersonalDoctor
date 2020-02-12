jQuery(document).ready(function(){
  "use script";
  var burgerBtn = $("#burgerToggle");
  burgerBtn.on("click", function(event){
    event.preventDefault();
    $(".burger__icon").toggleClass("open");
    $(".mobile__menu").toggleClass("mobile__menu--open");
  });
});