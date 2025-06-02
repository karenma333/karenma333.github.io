import gulp from 'gulp';
import handlebars from 'gulp-compile-handlebars';
import rename from 'gulp-rename';

var proj4Data = "./json/home.json";

//var markdown = require('helper-markdown')
//var hbs = require('handlebars');
//hbs.registerHelper('markdown', markdown([options]));

//create html files for static service
gulp.task('export', function(done){
		//source files
	var options={
			ignorePartials:true,
		   batch:['./views/partials']
		}
			var file = proj4Data
			var name = "index.html";
			gulp.src('./views/layouts/layout.handlebars')
			        .pipe(handlebars(file))
			        .pipe(rename(name))
			        .pipe(gulp.dest('.'));
			return done();

});

//Markdown to html


import markdown from 'gulp-markdown';

gulp.task("md", function(done){
	gulp.src('./views/partials/about.handlebars')
		.pipe(markdown())
		.pipe(gulp.dest('.'));

	return done();
}
);
		/*options={
			ignorePartials:false,
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
		       .pipe(gulp.dest('.'));*/


