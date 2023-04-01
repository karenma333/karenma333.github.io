var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

var project5Data = require("./json/designOps.json");


var data = [project5Data];

//create html files for static service
gulp.task('export', function(done){
		//source files
		options={
			ignorePartials:true,
		   batch:['./views/partials']
		}
			//for(var i=0;i<data.length;i++){
			//	var file = data[i];
			//	var name = i.toString()+".html";
			//	gulp.src('./views/layouts/layout.handlebars')
			//		        .pipe(handlebars(file))
			//		        .pipe(rename(name))
			//		        .pipe(gulp.dest('.'));
			//	}
			return gulp.src('./views/layouts/layout.handlebars')
		        .pipe(handlebars(project5Data,options))
		       .pipe(rename('index.html'))
		       .pipe(gulp.dest('.'));


});