var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

var homeData = require("./home.json");
var projectData = require("./projects.json");
var data = {homeData, projectData};

//create html files for static service
gulp.task('export', function(done){
	//source files
	options={
		ignorePartials:true,
	    batch:['./views/partials']
	}
	   //save file to temp destination
	    return gulp.src(['./views/layouts/layout.handlebars'])
        .pipe(handlebars(projectData, options))
        .pipe(rename('indexCompiled.html'))
        .pipe(gulp.dest('.'));
});

