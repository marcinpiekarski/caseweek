var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    // place code for your default task here
    browserSync({
        server: {
            baseDir: "src"
        }
    })
});

gulp.task('serve', ['browser-sync'], function(){
    gulp.watch(['src/**/*.html', 'src/**/*.js'], ['reload']);
})

gulp.task('reload', function(){
    browserSync.reload();
})