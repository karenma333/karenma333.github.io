jQuery(document).ready(function($) {
	/*function setHeight() {
	    windowHeight = $(window).innerHeight();
	    $('.intro').css('min-height', windowHeight);
};
setHeight();*/

$('.slider').slider();
$('.card-image-top').matchHeight();
});


$(window).resize(function() {
	setHeight();



});



