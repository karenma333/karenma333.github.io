var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

var homeData = require("./home.json");
var projectData = require("./projects.json")['projects'];

//create html files for static service
gulp.task('export', function(){
	//source files
	options={
		partials:{
			body:[homeData, projectData]
		},
	    batch:['./views/partials']
	}
	   //save file to temp destination
	    return gulp.src(['./views/partials/index.handlebars'])
        .pipe(handlebars(homeData, options))
        .pipe(rename('indexCompiled.html'))
        .pipe(gulp.dest('.'));
});

