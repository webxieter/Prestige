var gulp = require('gulp'),
	browserSync  = require('browser-sync'),
	rigger = require('gulp-rigger'),
	imagemin = require('gulp-imagemin'),
	htmlmin = require('gulp-html-minifier'),
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-clean-css'),
	uglify  = require('gulp-uglify'),
	gulpif = require('gulp-if'),
	autoprefixer = require('gulp-autoprefixer'),
	jshint = require("gulp-jshint"),
	plumber = require("gulp-plumber"),
	sourcemaps = require('gulp-sourcemaps'),
  sass = require('gulp-sass');

var config = {
	server: {
		baseDir: 'docs'
	},
	tunnel: false,  //-------------set to true!!!
	host: 'localhost',
	port: 3000,
	logPrefix: "DaveGhan prod.",
	browser: "chrome"
};

gulp.task ('browserSync', function(){
	browserSync(config)
});

gulp.task('images', function() {
	return gulp.src('dev/img/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('docs/img'))
	.pipe(browserSync.reload({
	 stream: true
    }))
});

gulp.task('fonts', function() {
	return gulp.src('dev/fonts/**/*')
	.pipe(gulp.dest('docs/fonts'))
});

gulp.task('HTML', function() {
  return gulp.src('dev/**/*.html')
	.on('error', console.log)
	.pipe(rigger())
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest('docs'))
	.pipe(browserSync.reload({
	 stream: true
    }))
});

gulp.task ('rigger', function(){
	return gulp.src('dev/**/*.html')
    .pipe(rigger())
    .pipe(gulp.dest('docs'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('styles', function () {
  return gulp.src('dev/css/*.css')
	.on('error', console.log)
	.pipe(sourcemaps.init())
	.pipe(autoprefixer({
		browsers: ['ie 7-9']
	}))
	.pipe(concat('main.css'))
	// .pipe(minifyCSS('main.min.css'))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('docs/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('sass-styles', function() {
  return gulp.src('dev/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dev/css'))
});

gulp.task('jshint', function() {
    return gulp.src('dev/js/*.js')
        .pipe(jshint()) //прогоним через jshint
       // .pipe(jshint.reporter('jshint-stylish')); стилизуем вывод ошибок в консоль
});

gulp.task('scripts', function () {
	return gulp.src('dev/js/*.js')
		 .pipe(sourcemaps.init())
		 .pipe(uglify())
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('docs/js'))
		 .pipe(browserSync.reload({stream: true}))
});

gulp.task ('watch', function(){
	gulp.watch('dev/**/*.html', ['rigger', 'HTML']);
	gulp.watch('dev/img/*', ['images']);
	gulp.watch('dev/fonts/**/*', ['fonts']);
	gulp.watch('dev/css/*.css', ['styles']);
	gulp.watch('dev/js/*.js', ['scripts']);
});

gulp.task ('default', ['HTML', 'fonts', 'styles', 'jshint', 'scripts', 'browserSync', 'watch']);