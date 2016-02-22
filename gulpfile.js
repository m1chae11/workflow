var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee');

// command :gulp log
gulp.task('log',function(){
	gutil.log('testing awesomnes of gulp');
})	
var coffeeSources = ['components/coffee/tagline.coffee'];
gulp.task('coffee',function(){
	gulp.src(coffeeSources)
	// compile javascript without safety wrapper!
	.pipe(coffee({bare:true})
		.on('error', gutil.log))
	.pipe(gulp.dest('components/scripts'))
	
})