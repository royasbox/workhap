$(window).on("load", start);

function start() {

    $("#menu a:first").click();

};

function loadpage(event) {

    event.preventDefault();
    $("#menu a.active").removeClass("active");
    $(this).addClass("active");

    var href = $(this).attr("href");
    $("#content").load(href);

}

function getsignup() {

    $("#menu a.active").removeClass("active");
    $("#menu li:nth-child(2) a").addClass("active");

    $("#content").load("signup.html");
}

$(document).on("click", "#menu a", loadpage);
$(document).on("click", "#signup", getsignup);
