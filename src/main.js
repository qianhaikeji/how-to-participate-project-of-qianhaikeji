import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routers from './Router'
import config from './Config'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter)
Vue.http.options.root = config.server
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  router: routers,
  template: '<App/>',
  components: { App }
}).$mount('#app')
