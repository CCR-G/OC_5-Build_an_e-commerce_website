const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //This generates the JS files
    entry: {
        index: './src/index/index.js',
        item: './src/item/item.js',
        basket: './src/basket/basket.js',
        command_confirm: './src/command-confirm/command-confirm.js',
    },
    mode: 'production',
    //This generates the HTML files
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/item/item.html',
            inject: true,
            chunks: ['item'],
            filename: 'item.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/basket/basket.html',
            inject: true,
            chunks: ['basket'],
            filename: 'basket.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/command-confirm/command-confirm.html',
            inject: true,
            chunks: ['command-confirm'],
            filename: 'command-confirm.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            insert: 'document.head.appendChild(linkTag)',
        }),
    ],
    module: {
        rules: [
            //The test property identifies which file or files should be transformed.
            //The use property indicates which loader should be used to do the transforming.
            { test: /\.s?[ac]ss$/i, use: [MiniCssExtractPlugin.loader, "css-loader"] },
        ]
    },
};