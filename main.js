jQuery(document).ready(function($) {
	function setHeight() {
	    windowHeight = $(window).innerHeight();
	    $('.intro').css('min-height', windowHeight);
};
setHeight();

	  
$(window).resize(function() {
	setHeight();
<<<<<<< Updated upstream
});
$(".slides").click(function() {
   $(this).toggleClass("bigger");
});
=======
});*/
//finalcontent.style.display = "none";
//finalcontent.visibility = "none";

>>>>>>> Stashed changes
$('.slider').slider();
$('.card-image-top').matchHeight();
});

<<<<<<< Updated upstream
function filterSelection(c) {

  var x, i;
  x = document.getElementsByClassName("filterDiv");
  console.log(x);
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
=======

function process(clicked_id){
  
  var x = document.getElementById(clicked_id +"content");
  console.log(x.style.display);
  if (x.style.display == "none"){
    var y = document.getElementsByClassName("onscreen");
    console.log(y);
    $(y).hide();
    $(y).removeClass("onscreen");
    $(x).addClass("onscreen");
    $(x).toggle();
>>>>>>> Stashed changes
  }
  
}

