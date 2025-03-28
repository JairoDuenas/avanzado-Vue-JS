import Vue from 'vue'
// BootstrapVue
import './plugins/BootstrapVue'
// Vue Font-Awesome
import './plugins/FontAwesone'
// Custom directives
import './directives'

import App from './App.vue'
import router from './router'
import store from './store'

// CSS global
import './assets/css/main.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    init () {
      store.dispatch('oauth/getToken')
    }
  },
  created () {
    this.init()
  },
  render: (h) => h(App)
}).$mount('#app')
