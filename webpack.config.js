const path = require('path');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: './main.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
}