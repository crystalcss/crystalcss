module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'styles',
                    src: ['sccs/*.scss'],
                    dest: '../build/css/',
                    ext: '.css'
                }]
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass']);
};