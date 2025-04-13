$(function(){
    $(".btn.buy").css("background-color","yellow")
    $(".logo").hide().delay(1000).fadeIn(2000);
})
$(function(){
    $(".hero h1").hide().fadeIn(1000);
    $(".hero p").hide().delay(500).fadeIn(1000);
});
$(".btn").hover(
    function(){
        $(this).animate({ opacity: 0.7 }, 200);
    },
    function(){
        $(this).animate({ opacity: 1 }, 200);
    }
);
$(window).on("scroll", function() {
    var scroll = $(window).scrollTop();
    var target = $(".animations-section").offset().top;

    if (scroll + $(window).height() > target + 100) {
        $(".animations-section").fadeIn(1000);
    }
});

$(function () {
    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop();
        var sectionTop = $("#animations").offset().top;

        if (scrollTop + $(window).height() > sectionTop + 100) {
            $("#animations").addClass("visible");
        }
    });
});
