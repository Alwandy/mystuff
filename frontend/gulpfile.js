/**
 * Created by v-jualwa on 4/4/2017.
 */
var gulp = require("gulp"),//http://gulpjs.com/
  util = require("gulp-util"),//https://github.com/gulpjs/gulp-util
  sass = require("gulp-sass"),//https://www.npmjs.org/package/gulp-sass
  autoprefixer = require('gulp-autoprefixer'),//https://www.npmjs.org/package/gulp-autoprefixer
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),//https://www.npmjs.org/package/gulp-rename
  log = util.log;

gulp.task("sass", function(){
  log("Generate CSS files " + (new Date()).toString());
  gulp.src('resources/css/*.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
    .pipe(gulp.dest("src/assets/dist/css"))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS())
    .pipe(gulp.dest('src/assets/dist/css'));
});

gulp.task("watch", function(){
  log("Watching scss files for modifications");
  gulp.watch('resources/css/*.scss', ["sass"]);
});
