var path = require('path');

module.exports = {
    entry: "./app/src/scripts/App.js",
    output: {
        path: path.resolve(__dirname, "./app/dist/scripts"),
        filename: "App.js"
    },
    // configuração babel
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
}