$(document).ready(function() {

$(document).scroll(function(){
           $('#nav').addClass('navshadow');

    if ($(this).scrollTop() > 50) {
       $('#nav').addClass('navshadow');
    } else {
       $('#nav').removeClass('navshadow');
    }
});

$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

})
