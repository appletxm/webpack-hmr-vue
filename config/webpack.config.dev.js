var path = require('path');
var webpack = require('webpack');
var HtmlWebPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');

var publicPath = 'http://localhost:3000/dist/';
//var publicPath = path.resolve('./dist');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var devConfig = {
    entry: {
        app: [hotMiddlewareScript, './src/js/index.js'],
        vendor: ['./src/assets/js-libs/auto-fix-screen.js', 'vue', 'vuex', 'vue-router', 'axios', 'promise']
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
                loader: 'url?limit=8192&context=client&name=[path][name].[ext]',
                exclude: /node_modules/
            },
            {
                test: /\.(woff|eot|eot|ttf|svg)(\?.+)?$/, 
                loader: "file?limit=8192&context=client&name=[path][name].[ext]",
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/, 
                loader: "file",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                //loader: ExtractTextPlugin.extract('style', 'css', 'sass'),
                loader: 'style!css!sass',
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
        new webpack.optimize.CommonsChunkPlugin('vendor',  '../dist/js/vendor.js'),
        new CopyPlugin([{ from: path.join(__dirname, '../src/assets'), to: path.join(__dirname, '../dist/assets')}]),
        new ExtractTextPlugin('css/[name].[hash].css'),
        new HtmlWebPlugin({
            title: 'txm test app',
            filename: path.join(__dirname, '../dist/', 'index.html'),
            template: path.join(__dirname, '../src/', 'index.html'),
            favicon: '',
            inject: 'body'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = devConfig;
