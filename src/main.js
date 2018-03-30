// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MyPlugin from './util/myPlugin'
import myFilter from './util/myFilter'
import myDirective from './util/myDirective'
import { AlertPlugin, ToastPlugin } from 'vux'
import 'font-awesome/css/font-awesome.css'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(MyPlugin)

let filterKeys = Object.keys(myFilter)
for (var i = 0; i < filterKeys.length; i++) {
  Vue.filter(filterKeys[i],myFilter[filterKeys[i]]);
}

let directiveKeys = Object.keys(myDirective)
for (var i = 0; i < directiveKeys.length; i++) {
  Vue.directive(directiveKeys[i],myDirective[directiveKeys[i]]);
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
