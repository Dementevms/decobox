export default class Dbox {
    
    constructor(){

    }

    init(){
        document.querySelectorAll('.dbox-content').forEach(item => {
            item.style.display = 'none';
            const close = item.querySelector('.dbox-content__close');
            if(close){
                close.addEventListener('click',() => {
                    this.close(item);
                },false);
            }
        });

        document.querySelectorAll('.dbox-open').forEach(item => {
            item.addEventListener('click', () => {
                this.open(item);
            }, false);
        });
    }

    open(item){
        switch(item.dataset.dboxType){
            case 'content': this.content(item.dataset.dboxId);
            break;
            case 'image': this.image();
            break;
        }
    }

    close(item){
        item.style.display = 'none';
    }

    content(id){
        console.log('Open content');
        const selector = '.dbox-content[data-dbox-id=' + id + ']';
        document.querySelector(selector).style.display = 'block';
    }

    image(){

    }

    getTmplContent(){
        return ``;
    }
}