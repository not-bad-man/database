// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(ViewUI)

Vue.prototype.bus = {
  pageType: 'student',
  changePage (pageType) {
    this.pageType = pageType;
  },
  getPageType() {
    return this.pageType;
  },
  dataList: {
    student: undefined, 
    department: undefined,
    fix: undefined,
    administrator: undefined,
    visitors: undefined
  }
};

/* eslint-disable no-new */
const vue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

