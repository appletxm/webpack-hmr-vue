/* global axios, console */

import html from './template.html';
//import weui from 'weui.js';
import picker from './picker';

import * as testPromise from '../../utils/testPromise';

export default {
	template: html,
	data() {
		return {
			title: 'i\'m home page',
			activeIndex: 0,
			getDataMsg: ''
		};
	},
	methods: {
		showPicker() {
			picker.createPicker();
		},
		getData() {
			axios.get('/user')
				.then((response) => {
					console.log(typeof response, response, response.retmsg);
					this.getDataMsg = response.retmsg;
				})
				.catch((error) => {
					console.log(error);
				});
		}
	},
	mounted() {
		testPromise.callGetA(123, 456).then((abc) => {
			console.info('****88***', abc);
			return testPromise.callGetB(123, abc);
		}).then((res) => {
			console.info('****99***', res);
		}).catch((err) => {
			console.info('****promise final***', err);
		});
	}
};
