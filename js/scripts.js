//busines logic
function Item(activity, time, coworker) {
  this.activity = activity;
  this.time = time;
  this.coworker = coworker;
}




//user logic
$(document).ready(function() {

  $("form#userInput").submit(function(event) {
    event.preventDefault();

    var imputActivity = $("#activity").val();
    $("#activity").val("");
    var imputTime = parseInt($("#time").val());
    $("#time").val("");
    var imputCoworker = $("#coworker").val();
    $("#coworker").val("");

    var newItem = new Item(imputActivity, imputTime, imputCoworker);

    $("ul#listDisplay").append("<span class='listDisplay'><li>" + newItem.activity+ ", "+newItem.time + ", "+ newItem.coworker + "</li></span>");

    $(".listDisplay").click(function() {
      $(this).remove();
    });
  });
});
