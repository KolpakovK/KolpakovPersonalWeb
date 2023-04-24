let nav = false;

$(document).ready(() => {
    console.log("Loaded");
    
    nav = $(".navbar.is-fixed-bottom");
    nav.css("bottom", "-120px");
    
    const fileInput = document.querySelector('input[type=file]');
    
    fileInput.onchange = () => {
        if (fileInput.files.length > 0) {
            const fileName = document.querySelector('.file-name');
            fileName.textContent = fileInput.files[0].name;
        }
    }
});

$(window).scroll(function() {
    var currentScrollPos = $(window).scrollTop();
    
    if (nav){
        if (currentScrollPos < 300) {
            nav.css("bottom", "-120px");
        } else {
            nav.css("bottom", "16px");
        }
    }
});

$(".navbar-burger").click(function() {
    
    $(".navbar-burger").toggleClass("is-active");
    $("#navMenu").toggleClass("is-hidden-touch");
    
});

