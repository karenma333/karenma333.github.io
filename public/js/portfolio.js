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
    console.log(window.location.pathname);
    e.preventDefault();
    /*CHANGE PATHNAME TO REAL URL*/
    /*if on home page*/
    var home = "/";
    var index = "/index.html"
    var section;
    //if we're not on the home page
    if(!(window.location.pathname == home) && !(window.location.pathname == index) ){
      console.log(!(window.location.pathname == home))
      section = $(this).attr("href");
      window.location.href = section;
      console.log(section);    
    }   
    //if not on section
    else if($(this).attr("name")){
      console.log("on the right place!");
      var section = $(this).attr("name");
      $("html, body").animate({
        scrollTop: $(section).offset().top - 100
      }, 'slow');
    }
});
})