module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        githooks: {
            all: {
                // Will create `./git/hooks/pre-commit` file which will be used at every commit,
                // so that to run the `jshint` and `test:unit` tasks before commit really happen.
                'pre-commit': 'sass',
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'scss/',
                    src: ['*.scss'],
                    dest: '../build/css/',
                    ext: '.css'
                }]
            }
        },
    });

    grunt.loadNpmTasks('grunt-githooks');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['githooks']);
};