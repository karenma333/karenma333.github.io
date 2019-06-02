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
  e.preventDefault();
  /*CHANGE PATHNAME TO REAL URL*/
  /*if on home page*/
  var home = "/Users/karen/Desktop/karenma333.github.io/index.html";
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
