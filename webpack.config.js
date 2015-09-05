var webpack = require('webpack');
module.exports = {
    entry: "./tests.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js', '.json']
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            { test: /\.css$/, loader: "style!css" },
        ]
    },
};
