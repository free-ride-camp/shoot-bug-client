import Vue from 'vue'
import App from './App.vue'
import router from '@/router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store';
import request from '@/common/request';

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this   //全局总线
    Vue.prototype.$addr = request
  }
}).$mount('#app')
