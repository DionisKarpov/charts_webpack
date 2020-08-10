import '../styles/styles.scss';
import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import { Swappable } from '@shopify/draggable';

const swappable = new Swappable(document.querySelectorAll('.swappable'), {
	draggable: 'li'
});

class TestClass {
	
	constructor() {
			let msg = "Using ES2015+ syntax";
			console.log(msg);
	}
}

let test = new TestClass();