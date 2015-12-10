var gulp = require('gulp')
  , gutil = require('gulp-util')
  , less = require('gulp-less')
  , minifyCss = require('gulp-minify-css')
  , sourcemaps = require('gulp-sourcemaps')
  , connect = require('gulp-connect')
  , b = require('browserify')
;

var config = {
	baseDir:'./app',
	less:{src:'/less/*',dest:'/css'},
	bro:{src:'/js/index.js',dest:'/js/bundle.js'}
};

gulp.task('less',function(){
	return gulp.src(config.baseDir + '/less/*.less')
	.pipe(less())
	.pipe(minifyCss())
	.pipe(gulp.dest(config.baseDir + '/css'));
});

gulp.task('default',['less']);
