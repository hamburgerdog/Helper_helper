import Vue from 'vue';
import VueRouter from 'vue-router';
import Order from '../views/Order.vue';
import Home from '../views/Home.vue';
import Setting from '../views/Setting.vue';
import HomeDetail from '../views/detail/HomeDetail.vue';
import HelperDetail from '../views/detail/Helper.vue';

Vue.use(VueRouter);
Vue.prototype.$eventBus = new Vue();

const routes = [
  {
    path: '/order',
    name: 'order',
    component: Order,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting,
  },
  {
    path: '/detail',
    name: 'detail',
    component: HomeDetail,
    children: [
      {
        path: 'helper',
        component: HelperDetail,
      },
    ],
  },
  {
    path: '/',
    redirect: '/home',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
