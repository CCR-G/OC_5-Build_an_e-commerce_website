const HtmlWebpackPlugin = require('html-webpack-plugin');

const meta = {
    'title': "orinoco",
    'author': "CCR-G",
    'viewport': "width=device-width, initial-scale=1.0",
}

module.exports = {
    //This generates the JS files
    entry: {
        index: './src/index/index.js',
        item: './src/item/item.js',
        basket: './src/basket/basket.js',
        command: './src/command/command.js',
    },
    mode: 'development',

    //This generates the HTML files
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html',
            'meta': meta,
        }),
        new HtmlWebpackPlugin({
            template: './src/item/item.html',
            inject: true,
            chunks: ['item'],
            filename: 'item.html',
            'meta': meta,
        }),
        new HtmlWebpackPlugin({
            template: './src/basket/basket.html',
            inject: true,
            chunks: ['basket'],
            filename: 'basket.html',
            'meta': meta,

        }),
        new HtmlWebpackPlugin({
            template: './src/command/command.html',
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