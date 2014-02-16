# grunt-swig2
> Task for rendering [Swig templates](http://paularmstrong.github.io/swig)

[![Build Status](https://travis-ci.org/gustavohenke/grunt-swig2.png?branch=master)](https://travis-ci.org/gustavohenke/grunt-swig2)
[![Dependency Status](https://gemnasium.com/gustavohenke/grunt-swig2.png)](https://gemnasium.com/gustavohenke/grunt-swig2)
[![NPM version](https://badge.fury.io/js/grunt-swig2.png)](http://badge.fury.io/js/grunt-swig2)

## Getting started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-swig2 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks("grunt-swig2");
```

## swig task
_Run this task with the `grunt swig` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options
#### data
Type: `Object`, `Function`
Default: `{}`

Locals that will be passed to each template when rendering. If this is a function, then it will be called once per target with no args.

#### filters
Type: `Object`
Default: `{}`

Object containing [custom Swig filters](http://paularmstrong.github.io/swig/docs/extending/#filters), where the key is the filter name and the value is the filter function.
Example:

```javascript
options: {
    filters: {
        // Makes strings more exciting
        makeExciting: function( input ) {
            return input + "!!!";
        }
    }
}
```

#### tags
Type: `Object`
Default: `{}`

Object containing [custom Swig tags](http://paularmstrong.github.io/swig/docs/extending/#tags), where the key is the tag name and the value is a object that _must_ contain `parser` and `compiler` functions. `ends` and `blockLevel` flags may also be passed, but are optional.
Also, you may pass a `ext` key as well, which will add a Swig extension with the name of this tag.

Example:

```javascript
options: {
    tags: {
        tagName: {
            parser: function( str, line, parser, types, options ) {
                // ...
            },
            compiler: function( compiler, args, content, parents, options, blockName ) {
                // ...
            },
            ends: true,
            blockLevel: true,
            ext: anythingHere
        }
    }
}
```

#### swigOptions
Type: `Object`
Default: `{}`

A hash of [Swig options](http://paularmstrong.github.io/swig/docs/api/#SwigOpts).
