import { defineComponent } from 'vue'
import type { PropType } from 'vue'
export default defineComponent({
    props: {
        texts: {
            type: Array as PropType<Array<TextColor>>,
            required: true
        }
    },
})