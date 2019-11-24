$(document).ready(function() {
  /*sticky header*/
  $(document).scroll(function(){
      $('#nav').addClass('navshadow');
      if ($(this).scrollTop() > 50) {
         $('#nav').addClass('navshadow');
      } else {
         $('#nav').removeClass('navshadow');
      }
  });
  /*smooth scroll*/
  $("#menu").find("a").click(function(e) {
    e.preventDefault();
    /*CHANGE PATHNAME TO REAL URL*/
    /*if on home page*/
    var home = "/";
    var index = "/index.html"
    var section;
    if((window.location.pathname == home) || (window.location.pathname == index) ){
      if($(this).attr("name"){
        var section = $(this).attr("name");
        $("html, body").animate({
          scrollTop: $(section).offset().top - 100
        }, 'slow');
        }
    }   
    else{
      section = $(this).attr("href");
      window.location.href = section;
    }
});
}