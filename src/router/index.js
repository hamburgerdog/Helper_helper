import Vue from 'vue';
import VueRouter from 'vue-router';
import Order from '../views/Order.vue';
import Home from '../views/Home.vue';
import Setting from '../views/Setting.vue';
import HomeDetail from '../views/detail/DetailRouteView.vue';
import WelfareDetail from '../views/detail/Welfare.vue';
import DeliverDetail from '../views/detail/Deliver.vue';
import HelperDetail from '../views/detail/Helper.vue';
import AsideDetail from '../views/detail/Aside.vue';
import FoodDetail from '../views/detail/Food.vue';

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
        path: 'welfare',
        component: WelfareDetail,
      },
      {
        path: 'deliver',
        component: DeliverDetail,
      },
      {
        path: 'helper',
        component: HelperDetail,
      },
      {
        path: 'aside',
        component: AsideDetail,
      },
      {
        path: 'food',
        component: FoodDetail,
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
