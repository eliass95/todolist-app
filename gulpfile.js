const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const cssImport = require('postcss-import');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');

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

    watch('./app/src/**/*.css', function(){
        gulp.start('cssInject');
    });

    watch('./app/src/scripts/**/*.js', function(){
        gulp.start('scriptsRefresh');
    });
})

gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/dist/css/main.css')
        .pipe(browserSync.stream());
});

gulp.task('styles', function(){
    return gulp.src('./app/src/css/main.css')
        .pipe(postcss([cssImport]))
        .pipe(gulp.dest('./app/dist/css'));
});

gulp.task('scriptsRefresh', ['scripts'], function(){
    browserSync.reload();
});

gulp.task('scripts', function(callback){
    webpack(require('./webpack.config.js'), function(err, stats) {
        if(err) {
            console.log(err.toString());
        }

        console.log(stats.toString());
        callback();
    });
});
