$(document).ready(function () {
    $("#menu-btn").click(function () {
        if ($("nav").hasClass("menu-shift-right")) {
                $("nav").removeClass("menu-shift-right");
                $(".wrapper").animate({left: '0px'}, 300);
                $(".curtain").animate({left: '0px'}, 200);
        } else {
            $("nav").addClass("menu-shift-right");
            $(".wrapper").animate({left: '250px'}, 300);
            $(".curtain").animate({left: '250px'}, 200);
        }
        $("body").css("overflow-y", "hidden");
    });
    $(".curtain").click(function () {
        $("nav").removeClass("menu-shift-right");
        $(".wrapper").animate({left: '0px'}, 300);
        $(".curtain").animate({left: '100%'}, 200);
        $("body").css("overflow-y", "visible");
    });
});