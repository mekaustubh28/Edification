var today = new Date();
var date = today.getFullYear();
$(".version").on("click", function() {
    alert("This is copyrighted website and first version was Uploaded on year 2020.");
});


var $sideBar = $('#side-Bar');
var $win = $(window);

$win.on("scroll", function() {
    console.log($win.scrollTop());
    if ($win.scrollTop() >= 2900) {
        $('#side-Bar-exams').addClass("opacity1");
    } else {
        $('#side-Bar-exams').removeClass("opacity1");
    }
    if ($win.scrollTop() >= 7755) {
        $('#side-Bar-advanced').addClass("opacity1");
    } else {
        $('#side-Bar-advanced').removeClass("opacity1");
    }
    $('.side-bar').addClass("speed");
});



$(".dropdownIcon").click(function() {
    $("ul.dropdownmenu2").slideToggle("medium");
    $("ul.dropdownmenu2").toggleClass("dis");
    return false;
});