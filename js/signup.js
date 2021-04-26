function collect() {
  var obj = {};

  $("input[name]").each(function () {
    var text = $(this).val();
    var name = $(this).attr("name");
    obj[name] = text;
  });

  $("#json").removeClass("d-none")

  var data = JSON.stringify(obj, null, '\t');
  $("#json").val(data);
}

function submit() {
  var item = $("div.page");
  item.hide();
  item.next(".page").hide();
  $("#title").remove();
  $("#submit").remove();
  $("#invite").remove();
  $('#message').text('Your submited information')
  $('#submitted').text('Based on the information you have provided you will be matched with other team members within your organization for virtual sessions.')

  collect();
}

function getmembership() {

  $("#menu a.active").removeClass("active");
  $("#menu li:nth-child(3) a").addClass("active");

  $("#content").load("pricing.html");
}

$(document).on("click", "#submit", submit);
$(document).on("click", "#membership", getmembership);