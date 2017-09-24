import Vue from 'vue';
import VueRouter from 'vue-router';
import html from './template.html';

Vue.use(VueRouter);

export default {
	template: html,
	data(){
		return {
			selectedIndex: 0
		};
	}
};
