module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        htmlmin: {
    		      dist: {
    		        options: {
    		          removeComments: true,
    		          collapseWhitespace: true
    		        },
    		        files: {
    		          'index.html': 'index.html',
    		          'project-2048.html': 'project-2048.html',
    		          'project-mobile.html': 'project-mobile.html',
    		          'project-webperf.html': 'project-webperf.html',
    		          'views/pizza.html': 'views/pizza.html',
    		        }
    		      }
    		},

  	    cssmin: {
  	      target: {
  	        files: [{
  	          expand: true,
  	          src: ['src/css/*.css', 'src/views/css/*.css'],
  	          dest: 'dist/css/',
  	          ext: '.css'
  	        }]
  	      }
  	    },

        uglify: {
  	      all: {
  	        files: [{
  	          expand: true,
  	          src: ['src/js/*.js', 'src/views/js/*.js'],
  	          dest: 'dist/js/',
  	          ext: '.js'
  	        }]
  	      }
  	    },

        imagemin: {
          dist: {
          options: {
            optimizationLevel: 5
          },
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/'
                }]
            }
        },

        responsive_images: {
          dev: {
            options: {
              engine: 'im',
              sizes: [{
                width: 100,
                suffix: '',
                quality: 40
              }]
            },

            /*
            You don't need to change this part if you don't change
            the directory structure.
            */
            files: [{
              expand: true,
              src: ['*.{gif,jpg,png}'],
              cwd: 'img',
              dest: 'img'
            }]
          }
        },

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['uglify', 'imagemin', 'responsive_images', 'htmlmin', 'cssmin']);

};
