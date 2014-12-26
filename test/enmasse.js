suite( "grunt-swig2", function() {
    "use strict";

    var grunt = require( "grunt" );
    var expect = require( "chai" ).expect;

    suiteSetup(function() {
        grunt.file.setBase( "test/enmasse" );
    });

    test( "should render swig template to html file", function( done ) {
        grunt.util.spawn({
            grunt: true,
            args: [ "swig:simple" ]
        }, function() {
            var actual = grunt.file.read( "actual/simple.html" );
            var expected = grunt.file.read( "expected/simple.html" );

            expect( expected ).to.equal( actual );
            done();
        });
    });

    test( "should join files when target expansion is false", function( done ) {
        grunt.util.spawn({
            grunt: true,
            args: [ "swig:joined" ]
        }, function() {
            var actual = grunt.file.read( "actual/joined.html" );
            var expected = grunt.file.read( "expected/joined.html" );

            expect( expected ).to.equal( actual );
            done();
        });
    });

    test(
        "should allow using a function to define locals, with Grunt templating support",
        function( done ) {
            grunt.util.spawn({
                grunt: true,
                args: [ "swig:dynamicData" ]
            }, function() {
                var actual = grunt.file.read( "actual/dynamicData.html" );
                var expected = grunt.file.read( "expected/dynamicData.html" );

                expect( expected ).to.equal( actual );
                done();
            });
        }
    );

    test( "should merge array of data into a single object", function( done ) {
        grunt.util.spawn({
            grunt: true,
            args: [ "swig:dataArray" ]
        }, function() {
            var actual = grunt.file.read( "actual/dataArray.html" );
            var expected = grunt.file.read( "expected/dataArray.html" );

            expect( expected ).to.equal( actual );
            done();
        });
    });

    test( "should allow passing custom Swig options", function( done ) {
        grunt.util.spawn({
            grunt: true,
            args: [ "swig:customOptions" ]
        }, function() {
            var actual = grunt.file.read( "actual/customDelimiter.html" );
            var expected = grunt.file.read( "expected/customDelimiter.html" );

            expect( expected ).to.equal( actual );
            done();
        });
    });

    test( "should add swig filters", function( done ) {
        grunt.util.spawn({
            grunt: true,
            args: [ "swig:filter" ]
        }, function() {
            var actual = grunt.file.read( "actual/filter.html" );
            var expected = grunt.file.read( "expected/filter.html" );

            expect( expected ).to.equal( actual );
            done();
        });
    });

    suite( "tags", function() {
        test( "should add swig tag", function( done ) {
            grunt.util.spawn({
                grunt: true,
                args: [ "swig:tag" ]
            }, function() {
                var actual = grunt.file.read( "actual/tag.html" );
                var expected = grunt.file.read( "expected/tag.html" );

                expect( expected ).to.equal( actual );
                done();
            });
        });

        test( "should add Swig tag extension", function( done ) {
            grunt.util.spawn({
                grunt: true,
                args: [ "swig:tagExtension" ]
            }, function() {
                var actual = grunt.file.read( "actual/tagExtension.html" );
                var expected = grunt.file.read( "expected/tagExtension.html" );

                expect( expected ).to.equal( actual );
                done();
            });
        });
    });
});