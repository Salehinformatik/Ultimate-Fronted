var gulp= require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    minify = require('gulp-minify');
const { src, series, parallel, dest, watch } = require("gulp");

// html task
function html() {
    require("./server.js");
    return src("stage/html/*.pug")
      .pipe(pug({ pretty: true }))
      .pipe(gulp.dest("dist"))
      .pipe(livereload());
  }


// Css task
function css(){
    return src(["stage/css/**/*.css", "stage/css/**/*.scss"])
       .pipe(sourcemaps.init())
       .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
       .pipe(autoprefixer("last 2 versions"))
       .pipe(concat("main.css"))
       .pipe(sourcemaps.write('.'))
       .pipe(gulp.dest("dist/css"))
       .pipe(livereload());
}

// Js task
function js(){
    return src("stage/js/*.js")
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload());
}

function see() {
    require("./server.js");
    livereload.listen();
    watch("stage/html/*.pug", series(html));
    watch(["stage/css/**/*.css", "stage/css/**/*.scss"], series(css));
    watch("stage/js/*.js", series(js));
  }

exports.html = html;
exports.css =css;
exports.js =js;
exports.default = see;