// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueResource from 'vue-resource';
import 'vuetify/dist/vuetify.min.css';
import App from './App';
import router from './router';
import store from './vuex/user';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueResource);

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.userInfo.userId === '') {
      console.log("before Each");
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();// be sure the next to be called
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
  },
  template: '<App/>',
});
