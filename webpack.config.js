const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.bunlde.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    devServer: {
        open: true,
        hot: true,
        port: 8080, 
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader', 'less-loader']
            }

        ]
    },
    mode: 'production'
}