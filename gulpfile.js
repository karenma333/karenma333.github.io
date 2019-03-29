var gulp = require('gulp');

//create html files for static service
gulp.task('export', function(){
	gulp.src './www/views/*.html'
	    .pipe through.obj (file, enc, cb) ->
	      render = hbs.create().express3
	        viewsDir: __base + 'views'
	        partialsDir: __base + 'views/partials'
	        layoutDir: __base + 'views/layouts'
	        defaultLayout: __base + 'views/layouts/layout.html'
	        extName: 'html'

	      locals = {
	        settings: {
	          views: __base + 'views'
	        }
	      }

	      self = this;
	      render file.path, locals, (err, html) ->
	        if(!err)
	          file.contents = new Buffer(html);
	          self.push(file);
	          cb();
	        else
	          console.log "failed to render #{file.path}"
	    .pipe gulp.dest './temp'
});

gulp.task('default', ['export']);
