var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var indexData = require("./json/home.json");
var proj1Data = require("./json/jobsdesign.json");
var proj2Data = require("./json/cobalt.json");
var proj3Data = require("./json/integrations.json");
var proj4Data = require("./json/retirementPlanner.json");


var data = [indexData,proj1Data,proj2Data,proj3Data,proj4Data];

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
					        .pipe(handlebars(file))
					        .pipe(rename(name))
					        .pipe(gulp.dest('.'));
				}
			return gulp.src('./views/layouts/layout.handlebars')
		        .pipe(handlebars(indexData,options))
		       .pipe(rename('index.html'))
		       .pipe(gulp.dest('.'));


});