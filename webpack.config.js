const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    entry: {
        polyfills: './src/scripts/polyfills.js',
        app: './src/scripts/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/pages/index.html',
            excludeChunks: ['polyfills'],
        }),
        new webpack.ProvidePlugin({
            $: '$',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    // externals: {
    // 	lodash: {
    // 		commonjs: 'lodash',
    // 		commonjs2: 'lodash',
    // 		amd: 'lodash',
    // 		root: '_',
    // 	},
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)/,
                use: 'url-loader',
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'img',
                            // publicPath: 'assets',
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            interpolate: true
                        }
                    },
                ],
            },
        ],
    },
};