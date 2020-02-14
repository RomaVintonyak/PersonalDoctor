jQuery(document).ready(function(){
    "use script";
  $("#formSubmit").on("click", function() {
    var name = $("#formName")
      .val()
      .trim();
    var mail = $("#formEmail")
      .val()
      .trim();
    var mesag = $("#formMessage")
      .val()
      .trim();

    if (name == "") {
      $("#erorMesag").text("Enter your name");
      return false;
    } else if (mail == "") {
      $("#erorMesag").text("Enter email");
      return false;
    } else if (mesag.length < 5) {
      $("#erorMesag").text("Enter Your Message");
      return false;
    }
    $("#erorMesag").text("");

    $.ajax({
      url: "../php/form.php",
      type: "POST",
      cache: false,
      data: { name: name, mail: mail, mesag: mesag },
      dataType: "html",
      beforeSend: function() {
        $("#formSubmit").prop("disabled", true);
      },
      success: function(data) {
        if (!data)
          alert("Message is not published, check all fields correctly");
        else alert("Thank you for your request");
        $("#feedback").trigger("reset");
        $("#formSubmit").prop("disabled", false);
      }
    });
  });
});
