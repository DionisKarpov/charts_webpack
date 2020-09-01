import '../styles/styles.scss';
import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import { Swappable } from '@shopify/draggable';

const swappable = new Swappable(document.querySelectorAll('.swappable'), {
	draggable: 'li'
});

class TestClass {}

let test = new TestClass();