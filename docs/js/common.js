$(document).ready(function(){
    
    var windowHeight = $(window).height();
    $(window).on("resize", function (e) {
        windowHeight = $(window).height();
        $(".fullHeight").css("min-height", windowHeight);
        $(".halfHeight").css("min-height", windowHeight / 5 * 2);

        var contentCenter = $(".content-center");
        for (i = 0; i < contentCenter.length; i++) {
            if ($($(contentCenter[i]).find(".container")[0]).height() + 200 >= $(contentCenter[i]).height()) {
                $(contentCenter[i]).css("min-height", $(contentCenter[i]).height() + 200);
            }
        }
    });
    $(window).resize();
    setTimeout(function () {
        $(window).resize();
    }, 3000);
})