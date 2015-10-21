module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      dist: {
        files: [
          {
            src : 'index.js',
            dest: 'dist/talisman.js'
          }
        ],
        options: {
          browserifyOptions: {
            standalone: 'talisman',
            debug     : true
          }
        }
      }
    },
    clean: {
      production: {
        src: [ 'dist/*' ]
      }
    }
  });

  /**
   * TASKS
   */
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['browserify:dist']);

  grunt.registerTask('default', ['build']);
};
