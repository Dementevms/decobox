export default class Dbox {
    
    constructor(options){
        this.cs = null;
        this.ns = null;
        this.group = null;
        this.groups = null;
        this.pointer = 0;
        this.items = {};
        if(options && options.templates){
            this.templates = options.templates;
        } else {
            this.templates = this.getDefaultTemplates();
        }
    }

    init(){
        document.querySelectorAll('.dbox').forEach((item, index) => {
            item.open = false;
            item.id = index;
            this.items[`${index}`] = item;
            item.addEventListener('click', () => {
                this.open(item);
            }, false);
        });
    }

    open(item){
        if(!item.open){
            item.open = true;
            this.cs = getSlide(item);
            let element = document.createElement('div');

            element = this.getSlide(item);
            if(item.dataset.dboxGroup){
                console.log('Group');
            } else {
                // Удаляем  arrow

            }
            document.body.insertAdjacentElement('beforeend', element);
        }
    }

    setTemplate(item){
        let element = document.createElement('div');
        
        let template = this.templates[`${ item.dataset.dboxTemplate }`];
        template = template.replace(/{{content}}/, '<i class="content"></i>');
        template = template.replace(/{{close}}/, '<i class="close"></i>');
        template = template.replace(/{{arrow}}/, '<i class="arrow"></i>');

        element.innerHTML = template;

        element.querySelectorAll('i.close').forEach(e => {
            const parent = e.parentElement;
            parent.addEventListener('click', () => {
                this.close(item, element);
            }, false);
            e.remove();
        });

        element.querySelectorAll('i.arrow').forEach((e, i) => {
            const parent = e.parentElement;
            parent.addEventListener('click', () => {
                this.arrow(item, element);
            }, false);
            e.remove();
        });

        const data = {
            content: element.querySelector('i.content').parentElement,
            closes: element.querySelectorAll('i.close').parentElement,
            arrows: element.querySelectorAll('i.arrow').parentElement,
            html: null
        };
    }

    arrow(arrow){
        this.ns = getSlide(item);
    }

    change(){
        this.cs.classList.add('hide');
        this.ns.classList.add('show');
        this.ns.addEventListener('transitionend', () => {
             
        }, false);
    }

    setArrows(){

    }

    setCloses(){
        
    }

    getSlide(item){
        const data = {
            content: null,
            closes: null,
            arrows: null,
            html: null
        };
        
        const content = item.dataset.dboxContent;
        
        
        const element = document.createElement('div');
        element.innerHTML = html;
        
        const close = element.querySelectorAll('i.close');
        close.forEach(e => {
            const parent = e.parentElement;
            parent.addEventListener('click', () => {
                this.close(item, element);
            }, false);
            e.remove();
        });

        return element;
    }

    getElement(){

    }

    close(item, element){
        console.log('Close Dbox');
        item.open = false;
        element.remove();
    }

    getDefaultTemplates(){
        return {
            default: `
            <div class="dbox-content" data-dbox-id="lorem">
                <div class="dbox-content__wrapper">
                    <div class="dbox-content__overflow">{{content}}</div>
                    <div class="dbox-content__close">{{close}}</div>
                    <div class="dbox-content__arrow dbox-content__arrow_left">{{arrow}}</div>
                    <div class="dbox-content__arrow dbox-content__right">{{arrow}}</div>
                </div>
            </div>`,
            substrate: `
            <div class="dbox-content" data-dbox-id="lorem">
                <div class="dbox-content__wrapper">
                    <div class="con-320">
                        <div class="dbox-content__substrate">
                            <div class="dbox-content__overflow">{{content}}</div>
                            <div class="dbox-content__close">{{close}}</div>
                            <div class="dbox-content__arrow dbox-content__arrow_left">{{arrowleft}}</div>
                    <div class="dbox-content__arrow dbox-content__right">{{arrowright}}</div>
                        </div>
                    </div>
                </div>
            </div>`
        };
    }
}