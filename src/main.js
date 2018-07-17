import Vue from 'vue'
import App from './App.vue'
import Login from './Login.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [{
      path: '/',
      component: App
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
