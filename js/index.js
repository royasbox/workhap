$(window).on("load", start);

function start () {
    
    $("#menu a:first").click();

};

function loadpage (event) {
    
    event.preventDefault();
    $("#menu a.active").removeClass("active");
    $(this).addClass("active");

    var href = $(this).attr("href");
    $("#content").load(href);

}

$(document).on("click", "#menu a", loadpage);