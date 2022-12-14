import Vue from 'vue'
import App from './App.vue'

import './assets/main.css'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
