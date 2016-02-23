// gulp API https://github.com/gulpjs/gulp/blob/master/docs/API.md

var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat'),
	browserify = require('gulp-browserify'),
	compass = require('gulp-compass');

// command :gulp log
gulp.task('log',function(){
	gutil.log('testing awesomnes of gulp');
})	
var sassSources = ['components/sass/style.scss']
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
		.pipe(browserify())
		.pipe(gulp.dest('builds/developments/js'))

})

gulp.task('compass',function(){
	gulp.src(sassSources)
	.pipe(compass({
		sass:'components/sass',
		image:'builds/developments/images',
		style:'expanded'
	})
		.on('error',gutil.log))
	.pipe(gulp.dest('builds/developments/css'))

})

gulp.task('watch',function(){
	gulp.watch(coffeeSources,['coffee'])
	gulp.watch(jsSources,['js'])
	gulp.watch('components/sass/*.scss',['compass'])
})


gulp.task('default',['js','compass','coffee'])