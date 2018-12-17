import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import "animate.css/animate.min.css"

import store from "./store";
import router from "./router";
import Vuelidate from "vuelidate";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEuroSign,faArrowDown,faPlusSquare} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEuroSign)
library.add(faArrowDown)
library.add(faPlusSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
