
$(window).scroll(function(){
	var scrollTop = $(window).scrollTop();
  	if ( scrollTop > $("#first").offset().top ) {
  	 $(".sticky").addClass("stuck");
 	}

})