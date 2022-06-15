var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

var homeData = require("./json/home.json");
<<<<<<< HEAD
<<<<<<< HEAD
var project3Data = require("./json/contributions.json");
var project2Data = require("./json/improveOnboardingWizard.json");
var projectData = require("./json/redesigning.json");
=======
var project3Data = require("./json/retirementPlanner.json");
var project2Data = require("./json/jobsaudit.json");
var projectData = require("./json/jobsdesign.json");
>>>>>>> v2
=======
var project3Data = require("./json/retirementPlanner.json");
var project2Data = require("./json/jobsaudit.json");
var projectData = require("./json/jobsdesign.json");
>>>>>>> v2
var data = [ homeData, projectData,project2Data,project3Data];

//create html files for static service
	gulp.task('export', function(done){
		//source files
		options={
			ignorePartials:true,
		    batch:['./views/partials']
		}
for(var i=0;i<data.length;i++){
	var file = data[i];
	var name = i.toString()+".html";
	gulp.src('./views/layouts/layout.handlebars')
		        .pipe(handlebars(file, options))
		        .pipe(rename(name))
		        .pipe(gulp.dest('.'));
	}
<<<<<<< HEAD
<<<<<<< HEAD
	return gulp.src('./views/layouts/layout.handlebars')
=======
			return gulp.src('./views/layouts/layout.handlebars')
>>>>>>> v2
=======
			return gulp.src('./views/layouts/layout.handlebars')
>>>>>>> v2
		        .pipe(handlebars(homeData, options))
		        .pipe(rename('index.html'))
		        .pipe(gulp.dest('.'));


});