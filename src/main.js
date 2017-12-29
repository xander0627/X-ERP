import Vue from 'vue'
import vueResource from 'vue-resource'
import Element from 'element-ui'
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filters' // global filter
import { post, get } from '@/utils/request'
// import utils from '@/utils/index'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import './permission' // permission control
import './mock' // simulation data generator

Vue.use(vueResource)
Vue.use(Element)

Vue.config.productionTip = false
// axios.defaults.withCredentials = true; 	//设置cookie可配置
Vue.prototype.$post = post
Vue.prototype.$get = get

// var winHeight = utils.winSize.

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
