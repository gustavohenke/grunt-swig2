module.exports = function( grunt ) {
    "use strict";

    grunt.initConfig({
        swig: {
            options: {
                data: {
                    hello: "Hello world"
                }
            },
            simple: {
                src: "../fixtures/simple.swig",
                dest: "actual/simple.html"
            },
            dynamicData: {
                options: {
                    data: function() {
                        return "<%= swig.options.data %>";
                    }
                },
                src: "../fixtures/dynamicData.swig",
                dest: "actual/dynamicData.html"
            },
            joined: {
                src: [ "../fixtures/joined/*.swig" ],
                dest: "actual/joined.html"
            },
            customOptions: {
                options: {
                    swigOptions: {
                        varControls: [ "<%=", "%>" ]
                    }
                },
                src: "../fixtures/customDelimiter.swig",
                dest: "actual/customDelimiter.html"
            },
            tag: {
                options: {
                    tags: {
                        paragraph: require( "./tag" )( false )
                    }
                },
                src: "../fixtures/tag.swig",
                dest: "actual/tag.html"
            },
            tagExtension: {
                options: {
                    tags: {
                        paragraph: require( "./tag" )( true )
                    }
                },
                src: "../fixtures/tagExtension.swig",
                dest: "actual/tagExtension.html"
            },
            filter: {
                options: {
                    filters: {
                        makeExciting: function( input ) {
                            return String( input ) + "!!!";
                        }
                    }
                },
                src: "../fixtures/filter.swig",
                dest: "actual/filter.html"
            },
            dataArray: {
                options: {
                    data: [
                        { foo: "Foo", bar: "Baz" },
                        { xyz: 123 },
                        { foo: "Foobar" },
                        { abc: "ABC" }
                    ]
                },
                src: "../fixtures/dataArray.swig",
                dest: "actual/dataArray.html"
            }
        }
    });

    grunt.loadTasks( "../../tasks" );
};