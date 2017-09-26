var path = require('path');
var webpack = require('webpack');
var HtmlWebPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');
var envConfig = require('./env');

var publicPath = '';
var prodConfig = {
    entry: {
        app: ['./src/js/index.js']
    },
    output: {
        filename: 'js/[name].[hash].js',
        path: path.resolve('./dist'),
        publicPath: publicPath
    },
    devtool: 'source-map',
    strictExportPresence: true,
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=5000&context=client&name=[name].[ext]&outputPath=assets/images/&publicPath=../',
                exclude: /node_modules/
            },
            {
                test: /\.(woff|eot|eot|ttf|svg)(\?.+)?$/, 
                loader: "file?limit=5000&context=client&name=[name].[ext]&outputPath=assets/images/&publicPath=../",
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/, 
                loader: "file",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style','css'),
                //loader: 'style!css',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass'),
                //loader: 'style!css!sass',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['','.js', '.scss', '.html', '.json'],
        alias: { 
            'vue': 'vue/dist/vue.js' 
        }
    },
    plugins: [
         new webpack.DefinePlugin({
            "process.env": { 
                NODE_ENV: JSON.stringify("production") 
            }
        }),
        new CopyPlugin([{ from: path.join(__dirname, '../src/assets'), to: path.join(__dirname, '../dist/assets')}]),
        new ExtractTextPlugin('../dist/css/[name].[hash].css'),
        new HtmlWebPlugin({
            libFiles: envConfig.prod.libFiles,
            filename: path.join(__dirname, '../dist/', 'index.html'),
            template: path.join(__dirname, '../src/', 'index.ejs'),
            favicon: '',
            inject: 'body'
        })
    ]
};

module.exports = prodConfig;