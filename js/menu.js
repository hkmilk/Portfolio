$(function(){
    $(".js-hamburger").on("click", function(e){
        e.stopPropagation();
        $(this).toggleClass("is-open");
        $(".l-navPage").toggleClass("is-open");
        $(".l-overlay").toggleClass("is-open");
        $("body").toggleClass("is-open"); 
    });


    $(".l-navPage").on("click", function(e){
        e.stopPropagation();
    });

    $(".l-navPage").on("click", function(e){
        if($(e.target).closest(".l-navPage__wrapper").length === 0){
            $(".js-hamburger").removeClass("is-open");
            $(".l-navPage").removeClass("is-open");
            $(".l-overlay").removeClass("is-open");
            $("body").removeClass("is-open"); 
        }
    });
});

$(window).on('resize', function () {
    const winWidth = $(window).width();

    $(".l-navPage").removeClass("is-open");
    $(".l-overlay").removeClass("is-open");
    $(".js-hamburger").removeClass("is-open");
    $("body").removeClass("is-open");

    if ($(".l-navPage").hasClass("is-open")) {
        $("body").addClass("is-open");
    }
});
