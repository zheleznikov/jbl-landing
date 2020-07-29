'use strict'
const { src, dest } = require('gulp');
module.exports = () => src('src/audio/**/*.*')
    .pipe(dest('build/audio'));