<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
    <bottom-nav class="fixed bottom-0"></bottom-nav>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon, Image as VanImage } from 'vant';
import router from './router/index';
import MyHeader from './components/Header.vue';
import BottomNav from './components/BottomNav.vue';

Vue.use(Icon);
Vue.use(VanImage);

export default {
  components: {
    MyHeader,
    BottomNav,
  },
  mounted() {},
  router,
};
</script>

<style lang="scss">
</style>
