import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import axios from '@/comts/axios'
import router from './router'
import store from './store'
import viewUi from 'view-design'
import 'view-design/dist/styles/iview.css';
import apis from '@/apis/apis'
Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.prototype.$apis = apis;
Vue.use(viewUi);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
