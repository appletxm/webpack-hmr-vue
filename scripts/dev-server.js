var express = require('express'),
	webpack = require('webpack'),
    path = require('path'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackDevConfig = require('../config/webpack.config.dev.js'),
    envConfig = require('../config/env');

var app = express();

var compiler = webpack(webpackDevConfig);

process.env.NODE_ENV = 'development';

//console.info('####', compiler.outputPath, path.join(compiler.outputPath, 'index.html'));

// attach to the compiler & the server
app.use(webpackDevMiddleware(compiler, {
    // public path should be the same with webpack config
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: true,
    stats: {
        colors: true
    }
}));

app.use(webpackHotMiddleware(compiler));

//app.use(express.static(__dirname + '/../dist'));

app.get('*', function(req, res) {
    /*//var url = path.join(__dirname, '../dist/index.html');
    var url = path.join(compiler.outputPath, 'index.html');
    console.info('*******************', req.url, '*************');
    //res.sendFile(path.join(__dirname, '/public/', 'index.html'));
    res.sendFile(url);*/

    var filename = path.join(compiler.outputPath,'index.html');

    console.info('####', compiler.outputPath, path.join(compiler.outputPath, 'index.html'));

    compiler.outputFileSystem.readFile(filename, function(err, result){
        if (err) {
            res.send(err);
        }else{
            res.set('content-type','text/html');
            res.send(result);
        }
        res.end();
    });
});

//TODO why in windows the port must to be 8088, and in mac you can define anyother port
//sometimes the npm start cli will get the "event: 160 erro" in windows you need to run the cli in the ternimal "rm -rf node_modules && npm cache clean --force && npm install"
app.listen(envConfig.dev.port, function(arg){
	console.info('---------dev server started----------', 'http://localhost:8088');
});