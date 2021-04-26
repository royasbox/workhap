$(document).on("click", "#getstarted", function () {
  $("#alert").removeClass("d-none")
});

$(document).on("click", "#close", function () {
  $("#alert").addClass("d-none")
});

function getcontactus() {

  $("#menu a.active").removeClass("active");
  $("#menu li:nth-child(4) a").addClass("active");

  $("#content").load("contact.html");
}

$(document).on("click", "#contactus", getcontactus);