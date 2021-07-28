import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'

// 组件内部按需引入

// 按需全局引入
// import vanCom from './vant'
// vanCom( Vue )

// 全部全局注册
import vant from 'vant';
import 'vant/lib/index.less'
Vue.use( vant );


Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
