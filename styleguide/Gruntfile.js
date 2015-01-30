/*eslint-env node */
'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },
      sass: {
        files: [
          '0.1/{,*/}*.{scss,sass}'
        ],
        tasks: ['sass']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.tmp/styles/{,*/}*.css',
          'images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: 'images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'images',
          src: '{,*/}*.svg',
          dest: 'images'
        }]
      }
    },
 
    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'sass'
      ],
      test: [
        'sass'
      ],
      dist: [
        'sass',
        'imagemin',
        'svgmin'
      ]
    },

    sass: {
      options: {
        sourceMap: true,
        includePaths: [
          'bower_components/bootstrap-sass/assets/stylesheets',
          '0.1'
        ]
      },
      dist: {
        files: {
          '0.1/bootstrap.css': '0.1/bootstrap.scss',
          '0.1/bootstrap-ehealth.css': '0.1/bootstrap-ehealth.scss'
        }
      }
    }
  });

  grunt.registerTask('watch', function() {

  });

  grunt.registerTask('build', [
    'sass'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};