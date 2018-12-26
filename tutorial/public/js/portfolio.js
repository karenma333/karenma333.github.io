$(document).ready(function() {
	initializePage();
})

function initializePage() {
	hideBlurbs();
	$('.project a').click(changeProj);

}
function hideBlurbs(){
	$('.project').hide();
	console.log($('.project').css("display"));
	$('.active').show();	
	console.log($('.project .active').css("display"));

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
	console.log("User clicked on project " + newproj);
}
function addDetails(projectID, result){
	var newID = ++projectID;
	$(this).attr('id') = newID;
}