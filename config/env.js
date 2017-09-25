var devEnv = {
    host:'localhost',
    port: 8088,
};
var urlPrefix = 'http://' + devEnv.host + ':' + devEnv.port;
var devlibJsPath = urlPrefix + '/dist/assets/js-libs/';
var devlibCssPath = urlPrefix + '/dist/assets/style/';
var devFontPath = urlPrefix + '/dist/assets/font/iconfont.css';

module.exports = {
    dev:{
        host: devEnv.host,
        port: devEnv.port,
        libFiles: {
            css: [
               devFontPath,
               devlibCssPath + 'weui.css'
            ],
            js: [
                devlibJsPath + 'auto-fix-screen.js',
                devlibJsPath + 'weui.js',
                devlibJsPath + 'vue.js',
                devlibJsPath + 'vue-router.js',
                devlibJsPath + 'vuex.js',
                devlibJsPath + 'axios.js'
            ]
        }
    },
    prd: {
        jsLibs: {
            
        }
    }
};