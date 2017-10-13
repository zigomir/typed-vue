import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App, { props: { msg: 'Welcome to Your Vue.js App', num: 123 } })
})
