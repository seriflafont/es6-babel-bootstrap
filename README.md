# es6-babel-bootstrap
A template for an es6 javascript web app with babel transpiling to es5 integrated.
Uses NPM and Bower to instantiate.
Uses Grunt as the task runner.
Grunt build is set up with:
- sass to css compilation
- concatenation and minification of bower libs
- es6 to es5 transpiling

## Dependencies:
npm
grunt-cli

## To use:
clone repo
cd to project folder
run 'npm install'
run 'bower install'
run 'grunt' for development 
run 'grunt dist' for distribution build