let nav = false;

$(document).ready(() => {
    console.log("Loaded");

    nav = $(".navbar.is-fixed-bottom");
    nav.css("bottom", "-120px");
});

$(window).scroll(function() {
    var currentScrollPos = $(window).scrollTop();
    console.log(currentScrollPos);

    if (nav){
        if (currentScrollPos < 300) {
            nav.css("bottom", "-120px");
        } else {
            nav.css("bottom", "16px");
        }
    }
});

$(".navbar-burger").click(function() {

    console.log("Burger clicks");
    $(".navbar-burger").toggleClass("is-active");
    $("#navMenu").toggleClass("is-hidden-touch");

});