$(document).ready(function() {

$(document).scroll(function(){
           $('#nav').addClass('navshadow');
    if ($(this).scrollTop() > 50) {
       $('#nav').addClass('navshadow');
    } else {
       $('#nav').removeClass('navshadow');
    }
});

$("#menu").find("a").click(function(e) {
  console.log(window.location.pathname);
  if(window.location.pathname == "index.html"){
      e.preventDefault();
      var section = $(this).attr("name");
      console.log(section);
      $("html, body").animate({
          scrollTop: $(section).offset().top - 100
      }, 'slow');
  }
});

})
