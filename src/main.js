// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import {Layout}  from 'bootstrap-vue/es/components';

Vue.use(Layout);
Vue.use(VueFire)
Vue.use(BootstrapVue)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'

})

