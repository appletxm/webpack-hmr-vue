import home from './pages/home';
import help from './pages/help';
import about from './pages/about';
import configAxios from './utils/axioDecorate'

let routes, router;

configAxios.decorate('/api');

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

