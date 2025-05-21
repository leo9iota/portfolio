import Vue from 'vue'
import { showClassBetween, hideClassBetween, percentageSteps } from '@/script/func'

export default Vue.extend({
    data() {
        return {
            windowPosition: 0,
            lastPos: 0,
            isFixed: false,
        }
    },
    created() {
        if(process.client){
            window.addEventListener('scroll', this.onscrollPosition)
            window.addEventListener('scroll', this.setWindowPosition)
            window.addEventListener('resize', this.setWindowPosition)
            this.onscrollPosition();
            this.setWindowPosition();
        }
    },
    destroyed() {
        if(process.client){
            window.removeEventListener('scroll', this.onscrollPosition)
            window.removeEventListener('shiddencroll', this.setWindowPosition)
            window.removeEventListener('resize', this.setWindowPosition)
        }
    },
    methods: {
        onscrollPosition(){
            let target = document.querySelector('.laptop');
            if(target){
                this.setLastPos();
                let y = target.getBoundingClientRect().top;
                if(y>0 || (this.lastPos !== 0 && this.lastPos > window.scrollY)){
                    this.isFixed = false;
                    target.classList.add('rel');
                    target.classList.remove('fix');
                }else if(!this.isFixed) {
                    this.isFixed = true;
                    this.setLastPos();
                    target.classList.add('fix');
                    target.classList.remove('rel');
                }
                console.log(
                    'y', y,
                    'lastPos', this.lastPos,
                    'window', window.scrollY,
                    'class', target.classList.toString()
                )
            }
        },
        setLastPos(){
            let el = document.querySelector('.section_title') as HTMLElement;
            if(el){
                this.lastPos = el.scrollHeight;
            }
        },
        laptopImageLoaded(){
            let el_img = document.querySelector('.laptop img') as HTMLElement;
            if(el_img){
                el_img.classList.remove('hidden');
            }
        },
        setWindowPosition(){
            if(process.client){
                this.windowPosition = window.scrollY;
            }
        },
        showClassBetween: showClassBetween,
        hideClassBetween: hideClassBetween,
    },
})
