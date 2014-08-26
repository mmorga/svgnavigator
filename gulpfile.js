var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('compress',function(){
  gulp.src('svgnavigator.js')
      .pipe(concat('svgnavigator.min.js'))
      .pipe(uglify({preserveComments:'some'}))
      .pipe(gulp.dest('dist'))
});

gulp.task('default',['compress'])
