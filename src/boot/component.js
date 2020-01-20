// import something here
import Vue from 'vue'
import SForm from 'app/src/components/S-Form.vue'
import SRating from 'app/src/components/S-Rating.vue'
import SFeedback from 'app/src/components/S-Feedback.vue'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)
// we globally register our component with Vue
Vue.component('s-form', SForm)
Vue.component('s-rating', SRating)
Vue.component('s-feedback', SFeedback)
// "async" is optional

// export default async ({ /* app, router, Vue, ... */ }) => {
//   // something to do
// }
