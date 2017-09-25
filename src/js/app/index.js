import Vue from 'vue';
import VueRouter from 'vue-router';

import html from './template.html';
import navigator from '../components/navigators';

Vue.use(VueRouter);

export default {
	template: html,

	data(){
		return {
			title: 'hellow vue 2.0 dkdkdkdk'
		}
	},
	components: {
		'navigator': navigator
	}
};

