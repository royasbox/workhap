function collect () {
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

function submit () {
	var item = $("div.page");
  item.hide();
  item.next(".page").hide();
  $("#submit").remove();
  $('#message').text('Your submited information')
  
  collect();
}

$(document).on("click", "#submit", submit);