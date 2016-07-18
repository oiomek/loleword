var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function(){
  return gulp.src('sass/**/*.sass')
	.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('./'))
});

gulp.watch('sass/**/*.sass', ['sass']); 



