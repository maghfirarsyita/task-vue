import Vue from 'vue';
import VueModalTor from 'vue-modaltor';
/* eslint-disable */ 
import '../node_modules/materialize-css/sass/materialize.scss';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './Components/CSS/App.scss';
import App from './Components/App.vue';

Vue.use(VueModalTor);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
