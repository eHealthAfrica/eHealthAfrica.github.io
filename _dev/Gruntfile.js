'use strict'

// Directory reference:
//   css: ../css
//   sass: scss
//   javascript: js
//   images: ../img
//   fonts: ../fonts

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt)
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    // Configurable paths
    paths: {
      dev: '.',
      dist: '..',
      tmp: '.tmp'
    },
    watch: {
      sass: {
        files: ['scss/**/*.{scss,sass}'],
        tasks: ['sass:server', 'autoprefixer:server']
      },
      browserify: {
        files: ['js/**/*.js'],
        tasks: ['browserify:basic']
      },
      jekyll: {
        files: ['../*.md', '../_includes/*.html', '../_layouts/*.html', '../_jobs/*.md', '../_projects/*.md'],
        tasks: ['jekyll:server']
      }
    },
    browserSync: {
      server: {
        bsFiles: {
          src: [
            '.jekyll/**/*.html',
            '.tmp/css/**/*.css',
            '.tmp/js/**/*.js',
            '<%= paths.dist %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
          ]
        },
        options: {
          server: {
            baseDir: [
              '.tmp',
              '.jekyll'
            ]
          },
          watchTask: true,
          ghostMode: false
        }
      },
      dist: {
        options: {
          server: {
            baseDir: '<%= paths.dist %>'
          }
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= paths.dist %>/js/*',
            '<%= paths.dist %>/css/*'
          ]
        }],
        options: {
          force: true
        }
      },
      server: [
        '.tmp',
        '.jekyll'
      ]
    },
    sass: {
      options: {
        debugInfo: false,
        lineNumbers: false,
        loadPath: '_bower_components'
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: '**/*.{scss,sass}',
          dest: '<%= paths.dist %>/css',
          ext: '.css'
        }]
      },
      server: {
        options: {
          debugInfo: true,
          lineNumbers: true
        },
        files: [{
          expand: true,
          cwd: 'scss',
          src: '**/*.{scss,sass}',
          dest: '.tmp/css',
          ext: '.css'
        }]
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      server: {
        expand: true,
        cwd: '.tmp',
        src: '**/{css,concat}/*.css',
        dest: '.tmp'
      },
      dist: {
        expand: true,
        cwd: '<%= paths.dist %>',
        src: 'css/*.css',
        dest: '<%= paths.dist %>'
      }
    },
    jekyll: {
      options: {
        config: '<%= paths.dist %>/_config.yml,<%= paths.dist %>/_config.build.yml',
        src: '<%= paths.dist %>'
      },
      server: {
        options: {
          config: '<%= paths.dist %>/_config.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    browserify: {
      basic: {
        src: ['js/**/*.js'],
        dest: '.tmp/js/eha.js'
      },
      dist: {
        src: ['js/**/*.js'],
        dest: '<%= paths.dist %>/js/eha.js'
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%= paths.dist %>',
          src: '**/*.html',
          dest: '<%= paths.dist %>'
        }]
      }
    },
    uglify: {
      dist: {
        files: {
          '<%= paths.dist %>/js/eha.js': ['<%= paths.tmp %>/js/eha.js']
        }
      }
    },
    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= paths.dist %>/css',
          src: ['*.css'],
          dest: '<%= paths.dist %>/css'
        }]
      }
    },
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= paths.dist %>',
          src: '**/*.{jpg,jpeg,png}',
          dest: '<%= paths.dist %>'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= paths.dist %>',
          src: '**/*.svg',
          dest: '<%= paths.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= paths.dist %>',
          src: [
            // Jekyll processes and moves HTML and text files.
            // Usemin moves CSS and javascript inside of Usemin blocks.
            // Copy moves asset files and directories.
            'img/**/*',
            'fonts/**/*',
            // Like Jekyll, exclude files & folders prefixed with an underscore.
            '!**/_*{,/**}',
            'CNAME'
            // Explicitly add any files your site needs for distribution here.
            // '_bower_components/jquery/jquery.min.js',
            // 'favicon.ico',
            // 'apple-touch*.png'
          ],
          dest: '.jekyll'
        }]
      }
    },
    filerev: {
      options: {
        length: 4
      },
      dist: {
        files: [{
          src: [
            '<%= paths.dist %>/js/**/*.js',
            '<%= paths.dist %>/css/**/*.css',
            '<%= paths.dist %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
            '<%= paths.dist %>/fonts/**/*.{eot*,otf,svg,ttf,woff}'
          ]
        }]
      }
    },
    buildcontrol: {
      dist: {
        options: {
          remote: 'git@github.com:eHealthAfrica/eHealthAfrica.github.io.git',
          branch: 'master',
          commit: true,
          push: true
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        'js/**/*.js',
        'test/spec/**/*.js'
      ]
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= paths.dist %>/css/**/*.css'
        ]
      }
    },
    concurrent: {
      server: [
        'sass:server',
        'browserify',
        'jekyll:server'
      ],
      dist: [
        'sass:dist',
        'browserify:dist'
      ]
    }
  })

  // Define Tasks
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'browserSync:dist'])
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer:server',
      'browserSync:server',
      'watch'
    ])
  })

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.')
    grunt.task.run(['serve'])
  })

  // No real tests yet. Add your own.
  grunt.registerTask('test', [
  //   'clean:server',
  //   'concurrent:test',
  //   'browserSync:test'
  ])

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'sass:server',
    'csslint:check'
  ])

  grunt.registerTask('build', [
    'clean',
    'concurrent:dist',
    'autoprefixer:dist',
    'cssmin',
    'browserify',
    'uglify:dist',
    'imagemin'
  ])

  grunt.registerTask('deploy', [
    'check',
    'test',
    'build',
    'buildcontrol'
  ])

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ])
}
