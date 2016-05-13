module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-copy');
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
     clean : ['dist/*.html',
              'dist/css/*',
              'dist/js/*',
              'dist/img/*',
              'dist/views/*.html',
              'dist/views/css/*.css',
              'dist/views/images/*',
              'dist/views/js/*.js'],
    jshint: {
        options: {
          curly: true,
          eqeqeq: true,
          eqnull: true,
          browser: true,
          globals: {
            jQuery: true
          },
        },
        uses_defaults: ['js/*.js',
                        'views/js/*.js'],
    },
    imagemin: {                          // Task
        static: {                        // Target
          options: {                       // Target options
            optimizationLevel: 3,
          },
          files: {                         // Dictionary of files
            'dist/views/images/pizzeria.jpg': 'dist/views/images/pizzeria-100x100.jpg' // 'destination': 'source'
          }
        }
      },
    responsive_images: {
        myTask: {
          options: {
            sizes: [{
              width: 100,
              height: 100
            }]
          },
          files: [{
            expand: true,
            cwd: 'views/images',
            src: ['pizzeria.jpg'],
            dest: 'dist/views/images/'
          }]
        }
      },
      copy: {
        main: {
          files: [
          {expand: true, cwd: 'views/images/',
          src: ['pizza.png'],
          dest: 'dist/views/images/'}
          ]},
          main1: {
            files: [
          { expand: true, cwd: 'img/', src: ['2048.png',
          'cam_be_like.jpg',
          'mobilewebdev.jpg',
          'profilepic.jpg'],
          dest: 'dist/img/'}
            ]}
    },
    htmlmin: {                     // Task
        dist: {                                      // Target
          options: {                                 // Target options
            removeComments: true,
            collapseWhitespace: true
          },
          files: {                              // Dictionary of files
            'dist/index.html': 'index.html',     // 'destination': 'source'
            'dist/project-2048.html': 'project-2048.html',
            'dist/project-webperf.html': 'project-webperf.html',
            'dist/project-mobile.html': 'project-mobile.html',
            'dist/README.md': 'README.md',
            'dist/views/pizza.html': 'views/pizza.html'
          }
        },
      },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css' ],
          dest: 'dist/css',
          ext: '.css'
        }]
      },
     views: {
        files: [{
          expand: true,
          cwd: 'views/css',
          src: ['*.css' ],
          dest: 'dist/views/css',
          ext: '.css'
        }]
      }
    },
    uglify: {
        options: {
          mangle: false
        },
        my_target: {
          files: {
            'dist/js/perfmatters.js': ['js/perfmatters.js'],
            'dist/views/js/main.js' : ['views/js/main.js']
          }
        }
      }
   });
   grunt.registerTask('default',[
      'clean',
      'jshint',
      'htmlmin',
      'cssmin',
      'uglify',
      'responsive_images',
      'imagemin',
      'copy'
   ]);
}
