import Vue from 'vue'
export default Vue.extend({
  name: 'Index',
  data() {
    return {
      lang: require('@/langs/$').$ as LanguageController,
    }
  },
})