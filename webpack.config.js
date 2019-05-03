path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/scripts.js',
    output: {
        filename: 'bandel.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        watchContentBase: true,
        compress: true,
        port: 8080
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    }
}