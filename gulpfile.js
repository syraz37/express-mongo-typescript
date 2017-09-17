const gulp = require('gulp');
const ts = require('gulp-typescript');
const gls = require('gulp-live-server');

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');
const server = gls.new('dist/index.js');

gulp.task('scripts', () => {
    const tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('restartServer', () => {
    server.start.bind(server)();
});

gulp.task('watch', ['scripts'], () => {

    server.start();

    gulp.watch('src/**/*.ts', ['scripts']);
    gulp.watch('dist/index.js', ['restartServer']);
});

gulp.task('default', ['watch']);