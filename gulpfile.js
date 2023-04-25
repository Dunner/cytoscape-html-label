"use strict";
var gulp = require("gulp");
var git = require("gulp-git");
var bump = require("gulp-bump");
var tag_version = require("gulp-tag-version");
var rename = require("gulp-rename");

var uglify = require("gulp-uglify");

function inc(importance) {
  return gulp
    .src(["./package.json"])
    .pipe(bump({ type: importance }))
    .pipe(gulp.dest("./"))
    .pipe(git.commit("new package version"))
    .pipe(tag_version());
}

gulp.task("patch", function () {
  return inc("patch");
});
gulp.task("feature", function () {
  return inc("minor");
});
gulp.task("release", function () {
  return inc("major");
});

gulp.task("min", function () {
  return gulp
    .src(["dist/cytoscape-html-label.js"])
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist", { ext: ".min.js" }));
});
