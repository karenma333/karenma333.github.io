var home = require("./home.json");
exports.view = function(req, res) {
	
	//show all projects
	var projBlurb = home.projBlurbs;
	console.log("home" + JSON.stringify(home["projBlurbs"]));
	console.log("proj" +projBlurb);
    res.render('index', home);
}
