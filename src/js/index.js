import "../assets/font/iconfont.css";
import '../css/index.scss';
import '../assets/js-libs/auto-fix-screen.js';
import weui from 'weui';

import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import App from './app';

const app = new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app');



