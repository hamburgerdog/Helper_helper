import Vue from 'vue';
import VueRouter from 'vue-router';

// App三大主页
import Order from '../views/Order.vue';
import Home from '../views/Home.vue';
import Setting from '../views/Setting.vue';

// 帮帮页面
import HomeDetail from '../views/detail/DetailRouteView.vue';
import WelfareDetail from '../views/detail/Welfare.vue';
import DeliverDetail from '../views/detail/Deliver.vue';
import HelperDetail from '../views/detail/Helper.vue';
import AsideDetail from '../views/detail/Aside.vue';
import FoodDetail from '../views/detail/Food.vue';

// 我的订单页面
import MyOrderPage from '../views/myorder/MyOrderPage.vue';

import MyAside from '../views/myorder/MyAside.vue';

import MyDeliver from '../views/myorder/MyDeliver.vue';
import MyDeliverPost from '../views/myorder/MyDeliverPost.vue';
import MyDeliverRunning from '../views/myorder/MyDeliverRunning.vue';

import MyFood from '../views/myorder/MyFood.vue';
import MyFoodPost from '../views/myorder/MyFoodPost.vue';
import MyFoodRunning from '../views/myorder/MyFoodRunning.vue';

import MyHelper from '../views/myorder/MyHelper.vue';
import MyHelperPost from '../views/myorder/MyHelperPost.vue';
import MyHelperRunning from '../views/myorder/MyHelperRunning.vue';

import MyWelfare from '../views/myorder/MyWelfare.vue';

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
    path: '/myorder',
    name: 'myorder',
    component: MyOrderPage,
    children: [
      {
        path: 'welfare',
        component: MyWelfare,
      },
      {
        path: 'deliver',
        component: MyDeliver,
        children: [
          {
            path: 'post',
            component: MyDeliverPost,
          },
          {
            path: 'run',
            component: MyDeliverRunning,
          },
        ],
      },
      {
        path: 'helper',
        component: MyHelper,
        children: [
          {
            path: 'post',
            component: MyHelperPost,
          },
          {
            path: 'run',
            component: MyHelperRunning,
          },
        ],
      },
      {
        path: 'aside',
        component: MyAside,
      },
      {
        path: 'food',
        component: MyFood,
        children: [
          {
            path: 'post',
            component: MyFoodPost,
          },
          {
            path: 'run',
            component: MyFoodRunning,
          },
        ],
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
