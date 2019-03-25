
var projects = require("../projects.json")['projects'];
exports.view = function(req, res) {
    var projID = req.params.id;
    var proj = getProjectData(projID);
    var image = req.params.image;
    res.render('project', proj);
}

function getProjectData(projectID) {
	projectID = parseInt(projectID);
  	var project = projects[projectID]; // of by one, our first project has index 0
  	return project;	
}
