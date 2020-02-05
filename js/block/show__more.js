jQuery(document).ready(function() {
  "use script";
  var blockComL = $(".coment__item--left");
  var blockComR = $(".coment__item--right")
  var btnComment = $("#WorkComent");
  var sliceCount = 1;
  blockComL.hide();
  blockComL.slice(0, sliceCount).show();
  blockComR.hide();
  blockComR.slice(0, sliceCount).show();
  
  btnComment.on("click", function(event) {
    event.preventDefault();
    $(".coment__item--left:hidden").slice(0, sliceCount).slideDown();
    $(".coment__item--right:hidden").slice(0, sliceCount).slideDown();
  });
});
