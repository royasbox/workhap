function send() {

  $('#sent').removeClass("d-none")
  $("#contact").addClass("d-none")

}

$(document).on("click", "#send", send);