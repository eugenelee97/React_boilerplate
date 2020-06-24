const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js'

    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            minimize: {
                                safe: true
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {}
                    }
                ],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                loader: 'file-loader',
                options: {
                    publicPath: './dist/',
                    name: '[name].[ext]?[hash]',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './src/'
        })
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css'],
    }
}