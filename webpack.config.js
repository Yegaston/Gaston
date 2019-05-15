const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // Entrada
    entry: {
        app: [
            '@babel/polyfill',
            './src/js/app.js'
        ],

    },

    // Output
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: 'js/app.bundle.js',
    },

    // Plugins Config
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/app.bundle.css'
        })
    ],
    // Dev Server Config
    devServer: {
        port: 4000,
    },

    // Css Loader

    module: {
        rules: [
            // QUe convierte.
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },

            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },

        ]
    }
}