var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

var homeData = require("./json/home.json");
var projectData = require("./json/projects.json");
var project2Data = require("./json/project2.json");

var data = [homeData, projectData,project2Data];

//create html files for static service
	gulp.task('export', function(done){
		//source files
		options={
			ignorePartials:true,
		    batch:['./views/partials']
		}
for(var i=0;i<data.length;i++){
	var file = data[i];
	var name = i.toString();
	gulp.src('./views/layouts/layout.handlebars')
		        .pipe(handlebars(file, options))
		        .pipe(rename(name))
		        .pipe(gulp.dest('.'));
			}
			   //save file to temp destination
			return gulp.src('./views/layouts/layout.handlebars')
		        .pipe(handlebars(homeData, options))
		        .pipe(rename('index'))
		        .pipe(gulp.dest('.'));


});


/*var gulp = require('gulp');
var hb = require('gulp-hb');

gulp.task('export',function(){
	var hbStream = hb({debug:true})
		.partials('./views/partials/*')
		.data('./json/*.json')

	return gulp.src('./views/layouts/layout.handlebars')
		.pipe(hbStream)
		.pipe(gulp.dest('./temp'));
});
*/