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
    prod: {
        libFiles: {
            css: [
               'assets/font/iconfont.css',
               'assets/style/weui.css'
            ],
            js: [
                'assets/js-libs/auto-fix-screen.js',
                'assets/js-libs/weui.min.js',
                'assets/js-libs/vue.min.js',
                'assets/js-libs/vue-router.min.js',
                'assets/js-libs/vuex.min.js',
                'assets/js-libs/axios.min.js'
            ]
        }
    }
};