module.exports = function( ext ) {
    "use strict";

    var tag = {
        ends: true,
        parse: function() {
            return true;
        }
    };

    if ( !ext ) {
        tag.compile = function( compiler, args, content, parents, options, blockName ) {
            var output = "";

            output += "_output += '<p>';\n";
            output += compiler( content, parents, options, blockName ) + ";\n";
            output += "_output += '</p>';\n";

            return output;
        };
    } else {
        tag.ext = function( content ) {
            return "<p>" + content + "</p>";
        };

        tag.compile = function( compiler, args, content, parents, options, blockName ) {
            var output = "";

            output += "(function() {\n";
            output += " var __o = _output;";
            output += " _output = '';";
            output += compiler( content, parents, options, blockName ) + ";";
            output += " __o += _ext.paragraph( _output );";
            output += " _output = __o;";
            output += "})();\n";

            return output;
        };
    }

    return tag;
};