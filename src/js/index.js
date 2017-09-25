import '../css/index.scss';
import router from './router';
import App from './app';

console.info(Vue);
console.info(VueRouter);

const app = new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app');


