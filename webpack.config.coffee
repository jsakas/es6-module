webpack = require('webpack')
path = require('path')

module.exports =
    entry: [
        './src/index.js'
    ]
    output:
        filename: 'index.js'
        path: path.resolve(__dirname, 'dist')
        library: 'Math2'
        libraryTarget: 'umd'
    devServer:
        contentBase: path.join(__dirname),
        port: 8000
    module:
        rules: [
            test: /\.js$/
            include: [
                path.resolve(__dirname, 'src')
            ]
            loader: 'babel-loader'
        ]
