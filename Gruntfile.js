module.exports = function(grunt) {
    "use strict";

    var webpack = require('webpack');

    grunt.initConfig({
        banner: '/*! <%= pkg.name %> - v.<%= pkg.version %>, <%= grunt.template.today("yyyymmdd-HHMMss") %>  */\n',
        pkg: grunt.file.readJSON('package.json'),
        jsdoc2md: {
            plugin: {
                options: {
                    "param-list-format": "list",
                    "property-list-format": "list"
                },
                src: 'src/js/**.js',
                dest: 'docs/src/plugin.md'
            }
        },
        cssstats: {
            options: {
                jsonOutput: true,
                htmlOutput: true,
                addHtmlStyles: true,
                addGraphs: true
            },
            plugin: {
                files: {
                    'reports': ['dist/styles/**.css', '!dist/styles/**.min.css']
                }
            }
        },
        md: {
            options: {
                wrapper: 'docs/template.html'
            },
            plugin: {
                src: 'docs/src/**.md',
                dest: 'docs/index.html'
            }
        },
        postcss: {
            dev: {
                options: {
                    processors: [
                        require('autoprefixer')({
                            browsers: ["Firefox ESR", "Opera 12", "ff >= 10", "ios >= 5", "ie > 8"]
                        })
                    ]
                },
                src: 'dist/styles/mappedJS.css',
                dest: 'dist/styles/mappedJS.css'
            },
            prod: {
                options: {
                    processors: [
                        require('autoprefixer')({
                            browsers: ["Firefox ESR", "Opera 12", "ff >= 10", "ios >= 5", "ie > 8"]
                        }),
                        require('cssnano')()
                    ]
                },
                src: 'dist/styles/mappedJS.css',
                dest: 'dist/styles/mappedJS.min.css'
            }
        },
        webpack: {
            options: require("./webpack.config.js"),
            dev: {
                output: {
                    filename: '[name].js'
                }
            },
            prod: {
                output: {
                    filename: '[name].min.js'
                },
                devtool: "source-map",
                plugins: [
                    new webpack.optimize.UglifyJsPlugin()
                ]
            }
        },
        shell: {
            deployDocs: {
                command: 'sh ./deploy-pages.sh'
            },
            tests: {
                command: './node_modules/.bin/istanbul cover _mocha'
            }
        },
        watch: {
            plugin: {
                files: ['src/**/*.js', 'src/**/*.scss'],
                tasks: ['bundle']
            }
        },
        sass: {
            options: {
                sourceMap: true,
                indentType: "tab",
                indentWidth: 1
            },
            plugin: {
                options: {
                    sourceComments: true,
                    outputStyle: "expanded"
                },
                files: {
                    "dist/styles/mappedJS.css": "src/styles/mappedJS.scss"
                }
            }
        }
    });

    // Load npm tasks
    grunt.loadNpmTasks('grunt-jsdoc-to-markdown');
    grunt.loadNpmTasks('grunt-css-statistics');
    grunt.loadNpmTasks('grunt-md');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks("grunt-shell");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    // Register grunt tasks
    grunt.registerTask('default', []);

    grunt.registerTask('docs', ["jsdoc2md:plugin", "md:plugin"]);
    grunt.registerTask('report', ["postcss", "cssstats:plugin"]);

    grunt.registerTask('deployDocs', ["docs", "report"]);
    grunt.registerTask('gh-pages', ["shell:deployDocs"]);

    grunt.registerTask('dev', ["watch:plugin"]);
    grunt.registerTask('bundle', ["sass:plugin", "postcss:dev", "webpack:dev"]);
    grunt.registerTask('ship', ["sass:plugin", "postcss:prod", "webpack:prod"]);

    grunt.registerTask('tests', ["shell:tests"]);

    grunt.registerTask('full', ["tests", "bundle", "ship", "deployDocs"]);


};
