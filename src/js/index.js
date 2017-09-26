import '../css/index.scss';
import router from './router';
import App from './app';

const app = new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app');


