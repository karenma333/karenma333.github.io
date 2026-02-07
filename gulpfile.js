import gulp from 'gulp';

var data = ["./markdown/retirementWizard.md","./markdown/jobs.md","./markdown/plg.md"]

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