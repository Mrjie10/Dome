import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'   //安装   FastClick 解决移动端的300ms延迟  npm install fastclick -save

import VueLazyload from 'vue-lazyload'   //图片懒加载   npm i vue-lazyload -S

import toast from './components/common/toast'
Vue.prototype.$bus = new Vue(); //挂载注册事件总线

Vue.config.productionTip = false;

Vue.use(toast); //安装toast插件 自定义插件

//解决移动端300ms延迟

FastClick.attach(document.body);  // fastclick第二步 解决移动端的300ms延迟

Vue.use(VueLazyload, {   //图片懒加载配置
  // preLoad: 1.3,
  // error: 'assets/img/common/placeholder.png',
  loading: require('assets/img/common/foor.png'),
  attempt: 1
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
