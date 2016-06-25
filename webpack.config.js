var webpack = require('webpack');

module.exports = {
    entry: {
        mappedJS: __dirname + '/src/js/Main.js'
    },
    output: {
        path: 'dist/js/',
        filename: '[name].js',
        libraryTarget: "umd",
        library: ["de"]
    },
    devtool: "cheap-module-source-map",
    stats: {
        colors: true,
        modules: true,
        reasons: true
    },
    progress: false,
    failOnError: false,
    watch: false,
    keepalive: false,
    inline: true,
    externals: {
        Handlebars: "Handlebars"
    },
    target: "web",
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                plugins: [
                    'transform-es2015-template-literals',
                    'transform-es2015-literals',
                    'transform-es2015-function-name',
                    'transform-es2015-arrow-functions',
                    'transform-es2015-block-scoped-functions', ["transform-es2015-classes", {
                        "loose": true
                    }],
                    'transform-es2015-object-super',
                    'transform-es2015-shorthand-properties',
                    'transform-es2015-computed-properties',
                    'transform-es2015-for-of',
                    'transform-es2015-sticky-regex',
                    'transform-es2015-unicode-regex',
                    'check-es2015-constants',
                    'transform-es2015-spread',
                    'transform-es2015-parameters',
                    'transform-es2015-destructuring',
                    'transform-es2015-block-scoping',
                    'transform-es2015-typeof-symbol', ['transform-regenerator', {
                        async: false,
                        asyncGenerators: false
                    }],
                    new webpack.optimize.OccurrenceOrderPlugin()
                ]
            }
        }]
    }
};
