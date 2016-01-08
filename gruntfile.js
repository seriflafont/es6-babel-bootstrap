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
			},
			dist: {
				dest: 'builds/dist/js/libs.js',
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
			options: {
                port: 9000,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [ 'development' ]
                }
            }
		},

		babel: {
			transpile:{
				options: {
		            sourceMap: true,
		            presets: ['es2015']
		        },
		        files: [{
	            	expand:true,
	            	src:['development/js/**/*.es6'],
	            	ext:'-compiled.js'
	            }]
			}
	    },

		watch: {
			options: {
				spawn: false,
				livereload: true
			},
			dev: {
				files: ['development/**/*.html', 
				'development/js/**/*.js',
				'development/sass/**/*.scss'],
				tasks: ['sass']
			},
			// Live reload
            reload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= watch.dev.files %>'
                ]
            }
		}

	}); 
	
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-concat'); 
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-bower-concat');
	grunt.registerTask('serve', function () {
        grunt.task.run([
            'connect:livereload',
            'watch'
        ]);
    });
	grunt.registerTask('default', ['bower_concat:dev', 'sass:dev', 'serve']);
	grunt.registerTask('dist', ['bower_concat:dist', 'concat','sass:dist']);

};