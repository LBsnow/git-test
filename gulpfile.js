/**
 * Created by pdog on 2016/11/22.
 */
// gulp的主文件，用于注册任务

// 载入gulp模块
var gulp = require("gulp");


// 注册一个任务
gulp.task("copy",function () {
    // 复制文件
    // 先取文件
    gulp.src("srcfile/demo.html")
        .pipe(gulp.dest("dist"));/*dest 是目的地*/
});

// 又一个任务 ，然后再node命令窗口打开写上gulp dist，会执行任务
gulp.task("dist",function () {
    gulp.watch("srcfile/demo.html",["copy"]);
});

// browsersync是保证代码改变的同时浏览器以及别的不同浏览器保持同步
// 这个依赖gulp和node环境