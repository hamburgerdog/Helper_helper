<template>
  <div id="app">
    <my-header></my-header>
    <router-view class=""></router-view>
    <bottom-nav class="fixed bottom-0"></bottom-nav>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
import router from './router/index';
import MyHeader from './components/Header.vue';
import BottomNav from './components/BottomNav.vue';

Vue.use(Icon);

export default {
  components: {
    MyHeader,
    BottomNav,
  },
  mounted() {
    this.$eventBus.$on('changeRoute', (reply) => {
      this.$router.push(reply.path);
    });
    this.$eventBus.$on('replaceRoute', (reply) => {
      this.$router.replace(reply.path);
    });
  },
  router,
};
</script>

<style lang="scss">
</style>
