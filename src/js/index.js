import '../css/index.scss';
import weui from 'weui.js';
import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import App from './app';

const app = new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app');



