import Vue from 'vue'
import App from './App.vue'
import './assets/sass/style.scss'
import router from '../router/index'
import './assets/iconfont/iconfont.css'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000/web/api'
})

import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)


import MyCard from './components/Card.vue'
import ListCard from './components/ListCard.vue'

Vue.component('my-card', MyCard)
Vue.component('list-card', ListCard)







new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
