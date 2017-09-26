import html from './template.html';
//import weui from 'weui.js';
import picker from './picker'

export default {
	template: html,
	data(){
		return {
			title: 'i\'m home page',
			activeIndex: 0,
			getDataMsg: ''
		}
	},
	methods: {
		showPicker () {
			picker.createPicker();
		},
		getData() {
			axios.get('/user')
			.then((response) => {
			  console.log(typeof response, response, response.retmsg)
			  this.getDataMsg = response.retmsg;
			})
			.catch((error) => {
			  console.log(error)
			})
		}
	}
};
