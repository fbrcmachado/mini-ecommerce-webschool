import Vue from 'vue'
import App from './App'


import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'


Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'red',
  background: 'red'
})

Vue.config.productionTip = false
new Vue({
  el: '#app',
  render: h => h(App)
})
