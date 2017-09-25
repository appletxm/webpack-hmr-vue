module.exports = {
    dev:{
        host: 'localhost',
        port: 8088,
        jsLibs: {
            'auto-fix-screen': '/dist/assets/js-libs/auto-fix-screen.js',
            'vue': '/dist/assets/js-libs/vue.js',
            'vue-router': '/dist/assets/js-libs/vue-router.js',
            'vuex': '/dist/assets/js-libs/vuex.js',
            'axios': '/dist/assets/js-libs/axios.js',
            'weui': '/dist/assets/js-libs/weui.js'
        }
    },
    prd: {
        jsLibs: {
            
        }
    }
};