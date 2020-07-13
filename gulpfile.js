var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

var homeData = require("./json/home.json");
var project2Data = require("./json/travelBudgeting.json");
var project3Data = require("./json/increasingUserEngagement.json");
var project4Data = require("./json/improveOnboardingWizard.json");
var projectData = require("./json/condensingProductValue.json");
var data = [ homeData, projectData,project2Data, project3Data,project4Data];

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
			return gulp.src('./views/layouts/layout.handlebars')
		        .pipe(handlebars(homeData, options))
		        .pipe(rename('index.html'))
		        .pipe(gulp.dest('.'));


});