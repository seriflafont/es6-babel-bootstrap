# es6-babel-bootstrap
A template for an es6 javascript web app with babel transpiling to es5 integrated.
Uses NPM and Bower to instantiate.
Uses Grunt as the task runner.
Grunt build is set up with:
- sass to css compilation
- concatenation and minification of bower libs
- es6 to es5 transpiling

## Dependencies:
- npm
- grunt-cli

## To use:
1. clone repo
2. cd to project folder
3. run 'npm install'
4. run 'bower install'
5. run 'grunt' for development 
6. run 'grunt dist' for distribution build