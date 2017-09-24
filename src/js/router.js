import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './pages/home';
import help from './pages/help';
import about from './pages/about';

let routes, router;

Vue.use(VueRouter);

routes = [
	{ path: '/', component: home },
	{ path: '/#/', component: home },
	{ path: '/home', component: home },
	{ path: '/about', component: about },
	{ path: '/help', component: help }
];

router = new VueRouter({
	routes
});


export default router;

