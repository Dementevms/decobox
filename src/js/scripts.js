import '../less/styles.less';
import '../less/dbox.less';
import Dbox from './dbox.js';

const dbox = new Dbox();

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');
    dbox.init()
} ,false);

console.log('dbox', dbox);