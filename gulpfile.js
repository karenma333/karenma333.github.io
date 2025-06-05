import gulp from 'gulp';

var proj4Data = "./json/home.json";
var data = ["./markdown/about.md","./markdown/projectlist.md"]

import markdown from 'gulp-markdown';

gulp.task("md", function(done){
	for(var i=0;i<data.length;i++){
		var file = data[i];
		gulp.src(file)
		.pipe(markdown())
		.pipe(gulp.dest('.'));
	}

	return done();
}
);



