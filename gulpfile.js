"use strict";
var gulp = require('gulp');
var git = require('gulp-git');
var bump = require('gulp-bump');
var tag_version = require('gulp-tag-version');

var Server = require('karma').Server;

function inc(importance) {
  return gulp.src(['./package.json'])
    .pipe(bump({type: importance}))
    .pipe(gulp.dest('./'))
    .pipe(git.commit('new package version'))
    .pipe(tag_version());
}

gulp.task('patch', function () {
  return inc('patch');
});
gulp.task('feature', function () {
  return inc('minor');
});
gulp.task('release', function () {
  return inc('major');
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
  }, done).start();
});