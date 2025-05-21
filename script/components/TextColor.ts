import Vue from 'vue'
import type { PropType } from 'vue'
export default Vue.extend({
    data() {
        return {
            text: "" as String,
            mark: false as Boolean,
        }
    },
    props: {
        value: {
            type: Object as PropType<TextColor>,
            required: true
        }
    },
    created() {
        this.text = this.value.txt;
        this.mark = this.value.mark as Boolean;
    }
})