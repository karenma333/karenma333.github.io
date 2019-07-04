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
    var section;
    if(!(window.location.pathname == home)){
      section = $(this).attr("href");
      window.location.href = section;    
    }   
    else{
      var section = $(this).attr("name");
      $("html, body").animate({
        scrollTop: $(section).offset().top - 100
      }, 'slow');
    }

    //}
  });
})