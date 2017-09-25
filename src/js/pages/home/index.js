import html from './template.html';
//import weui from 'weui.js';
import picker from './picker'

export default {
	template: html,
	data(){
		return {
			title: 'i\'m home page',
			activeIndex: 0
		}
	},
	methods: {
		showPicker () {
			picker.createPicker();
		}
	}
};
