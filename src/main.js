import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
<<<<<<< HEAD

// import style
import 'view-design/dist/styles/iview.css';

=======
import 'view-design/dist/styles/iview.css';
>>>>>>> deeb87c5cc27e3ffac32b0dc2b954d9a7cbb4bf5
Vue.use(ViewUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
