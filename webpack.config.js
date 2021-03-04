const HtmlWebpackPlugin = require('html-webpack-plugin');

const meta = {
    'title': "orinoco",
    'author': "CCR-G",
    'viewport': "width=device-width, initial-scale=1.0",
    charset: { charset: 'utf-8' },
}

module.exports = {
    //This generates the JS files
    entry: {
        index: './src/pages-logic/index/index.js',
        furniture: './src/pages-logic/furniture/furniture.js',
        basket: './src/pages-logic/basket/basket.js',
        command: './src/pages-logic/command/command.js',
        common: './src/pages-logic/common/common.js'
    },
    mode: 'development',

    //This generates the HTML files
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages-logic/index/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html',
            'meta': meta,
        }),
        new HtmlWebpackPlugin({
            template: './src/pages-logic/furniture/furniture.html',
            inject: true,
            chunks: ['furniture'],
            filename: 'furniture.html',
            'meta': meta,
        }),
        new HtmlWebpackPlugin({
            template: './template.html',
            templateParameters: { 'partial': 'basket' },
            inject: true,
            chunks: ['basket'],
            filename: 'basket.html',
            'meta': meta,

        }),
        new HtmlWebpackPlugin({
            template: './src/pages-logic/command/command.html',
            inject: true,
            chunks: ['command'],
            filename: 'command.html',
            'meta': meta,
        }),
    ],
    module: {
        rules: [
            //The test property identifies which file or files should be transformed.
            //The use property indicates which loader should be used to do the transforming.
            //{ test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
        ]
    },
};