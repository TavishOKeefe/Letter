$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();

    $(".person1").append(person1Input);

    $("#letter").removeClass("hide");
    $("#formOne").addClass("hide");

    event.preventDefault();
  });
});
