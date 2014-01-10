module.exports = function( grunt ) {
    "use strict";

    grunt.initConfig({
        watch: {
            all: {
                files: [ "tasks/**/*.js", "test/**/*.js" ],
                tasks: [ "default" ]
            }
        },
        jshint: {
            all: {
                options: {
                    jshintrc: ".jshintrc"
                },
                src: [
                    "Gruntfile.js",
                    "tasks/**/*.js",
                    "test/**/*.js"
                ]
            }
        },
        jscs: {
            all: "<%= jshint.all.src %>"
        },
        mochaTest: {
            test: {
                options: {
                    ui: "tdd",
                    reporter: "spec"
                },
                src: [ "test/*.js" ]
            }
        }
    });

    grunt.loadTasks( "tasks" );

    grunt.loadNpmTasks( "grunt-mocha-test" );
    grunt.loadNpmTasks( "grunt-jscs-checker" );
    grunt.loadNpmTasks( "grunt-contrib-jshint" );
    grunt.loadNpmTasks( "grunt-contrib-watch" );

    grunt.registerTask( "test", "mochaTest" );
    grunt.registerTask( "default", [ "jshint", "jscs", "test" ] );
};