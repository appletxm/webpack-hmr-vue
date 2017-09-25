import html from './template.html';
import weui from 'weui.js';

console.info(weui);

export default {
	template: html,
	data(){
		return {
			title: 'i\'m home page',
			activeIndex: 0
		}
	}
};
