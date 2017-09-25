var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function(){
        browserSync.reload();
    });

    watch('./app/assets/**/*.css', function(){
        gulp.start('cssInject');
    });
})

gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/dist/main.css')
        .pipe(browserSync.stream());
});

gulp.task('styles', function(){
    return gulp.src('./app/assets/css/main.css')
        .pipe(postcss([cssImport]))
        .pipe(gulp.dest('./app/dist'));
});