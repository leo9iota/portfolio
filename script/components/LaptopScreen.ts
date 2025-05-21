import Vue from 'vue'
import { showClassBetween, hideClassBetween, percentageSteps, percentageTranslateFocus } from '@/script/func'

export default Vue.extend({
    props: {
        windowPosition: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            lang: require('@/langs/$').$ as LanguageController,
            lastPos: 0,
            isFixed: false,
            // pixels
            step: 600,
            mywork_start: 600,
            mywork_end: 3300,
            canCode_start: 3300,
            canCode_end: 0,
            canFramework_start: 0,
            canFramework_end: 0,
        }
    },
    created() {


        if(process.client){
            window.addEventListener('scroll', this.onscrollPosition)
            this.onscrollPosition();
        }

        this.canCode_end = ((this.lang.$.canCode.langs.length + 1) * this.step) + this.mywork_end;
        this.canFramework_start = this.canCode_end;
        this.canFramework_end = ((this.lang.$.canFramework.langs.length + 1) * this.step) + this.canCode_end;
    },
    destroyed() {
        if(process.client){
            window.removeEventListener('scroll', this.onscrollPosition)
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
            let el = document.querySelector('.laptop .screen') as HTMLElement;
            if(el){
                el.classList.remove('hidden');
            }
        },
        showClassBetween: showClassBetween,
        hideClassBetween: hideClassBetween,
        percentageSteps: percentageSteps,
        percentageTranslateFocus: percentageTranslateFocus,
    },
})
