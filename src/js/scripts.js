import '../less/styles.less';
import '../less/dbox.less';
import Dbox from './dbox.js';

const tmplDefault = {
    default: `
    <div class="dbox-content" data-dbox-id="lorem">
        <div class="dbox-content__wrapper">
            <div class="con-320">
                <div class="dbox-content__substrate">
                    <div class="dbox-content__overflow">{{content}}</div>
                    <div class="dbox-content__close"></div>
                </div>
            </div>
        </div>
    </div>`
};

const dbox = new Dbox();

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');
    dbox.init()
} ,false);

console.log('dbox', dbox);