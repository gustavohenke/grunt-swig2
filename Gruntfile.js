module.exports = function( grunt ) {
    "use strict";

    grunt.initConfig({
        watch: {
            all: {
                files: [ "tasks/**/*.js", "test/**/*.js" ],
                tasks: [ "default" ]
            }
        },
        bump: {
            options: {
                files: [ "package.json" ],

                // Commit
                commit: true,
                commitMessage: "Release v%VERSION%",
                commitFiles: [ "package.json" ],

                // Tag
                createTag: true,
                tagName: "%VERSION%",
                tagMessage: "Version %VERSION%",

                // Push
                push: true,
                pushTo: "origin"
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

    grunt.loadNpmTasks( "grunt-bump" );
    grunt.loadNpmTasks( "grunt-mocha-test" );
    grunt.loadNpmTasks( "grunt-jscs-checker" );
    grunt.loadNpmTasks( "grunt-contrib-jshint" );
    grunt.loadNpmTasks( "grunt-contrib-watch" );

    grunt.registerTask( "test", "mochaTest" );
    grunt.registerTask( "default", [ "jshint", "jscs", "test" ] );
};