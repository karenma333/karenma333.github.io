var home = require("./home.json");
exports.view = function(req, res) {
	
	//show all projects
	var projBlurb = home.about.pitch;
	console.log("home" + JSON.stringify(home["projBlurbs"]));
    res.render('index', home);
}
