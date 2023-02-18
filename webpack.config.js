const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: 'main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
}