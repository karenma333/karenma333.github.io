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
  /*nav on project page?*/
  var loc = window.location.href; // returns the full URL
  if(/0/.test(loc)) {
    $('#nav').addClass('navshadow');
    console.log(loc);
  }
  /*smooth scroll*/
  $("#menu").find("a").click(function(e) {
    console.log(window.location.pathname);
    e.preventDefault();
    /*CHANGE PATHNAME TO REAL URL*/
    /*if on home page*/
    var home = "www.noodlelime.me/index.html";
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
  /*Carousel buttons override*/
})
