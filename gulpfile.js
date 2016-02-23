var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat');

// command :gulp log
gulp.task('log',function(){
	gutil.log('testing awesomnes of gulp');
})	

var coffeeSources = ['components/coffee/tagline.coffee'];
var jsSources = ['components/scripts/*.js'];

gulp.task('coffee',function(){
	gulp.src(coffeeSources)
	// compile javascript without safety wrapper!
	.pipe(coffee({bare:true})
		.on('error', gutil.log))
	.pipe(gulp.dest('components/scripts'))	
})

gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe(concat('scripts.js')
			.on('error',gutil.log))
		.pipe(gulp.dest('builds/developments/js'))

})