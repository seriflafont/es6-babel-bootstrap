module.exports = function(grunt){
	grunt.initConfig({
		
		concat : { 
			options :{
				separator: '\n\n//---------------------------\n\n'
			},
			dist : { 
				src: ['development/js/*.js'],
				dest: 'builds/dist/js/script.js'
			}
		},
		bower_concat:{
			dev: {
				dest: 'development/js/libs.js',
				cssDest: 'development/css/libs.css'
			},
			dist: {
				dest: 'builds/dist/js/libs.js',
				cssDest: 'builds/dist/css/libs.css'
			}
		},
		sass: {
			dev:{
				options: { 
					style: 'expanded'
				},
				files: [{
					src: 'development/sass/style.scss',
					dest: 'development/css/style.css'
				}]
			},
			dist: {
				options: { 
					style: 'expanded'
				},
				files: [{
					src: 'development/sass/style.scss',
					dest: 'builds/dist/css/style.css'
				}]
			}
		}, 

		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 3000,
					base: 'development/',
					livereload: true
				}
			}
		},

		watch: {
			options: {
				spawn: false,
				livereload: true
			},
			scripts: {
				files: ['development/**/*.html', 
				'development/js/**/*.js',
				'development/sass/**/*.scss'],
				tasks: ['sass']
			}
		}

	}); 

	grunt.loadNpmTasks('grunt-contrib-concat'); 
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-bower-concat');
	grunt.registerTask('default', ['bower_concat:dev', 'sass:dev', 'connect', 'watch']);
	grunt.registerTask('dist', ['bower_concat:dist', 'concat','sass:dist']);

};