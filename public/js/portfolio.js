$(document).ready(function() {
	//initializePage();
})

$(window).scroll(function(){
	console.log("scroolled");
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
function initializePage() {
	hideBlurbs();
	$('.project a').click(changeProj);

}
function hideBlurbs(){
	$('.project').hide();
	$('.active').show();	

}
function changeProj(e) {
	// Prevent following the link
	e.preventDefault();
	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	//var idNumber = projectID.substr('project'.length);
	$(this).closest('.project').hide();
	var newproj = parseInt(projectID) + 1;
	newproj = "#" + newproj;
	$(newproj).show();
	//$.get("/project/"+projectID,addDetails);
	//$.get("/",addDetails(projectID));
}
function addDetails(projectID, result){
	var newID = ++projectID;
	$(this).attr('id') = newID;
}