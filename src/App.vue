<template>
  <div id="app" class="pt-12">
    <my-header class="fixed top-0 w-full" :AppHeader="AppHeader"></my-header>
    <router-view>
      <bottom-nav class="fixed bottom-0 bg-white"></bottom-nav>
    </router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon, Image as VanImage } from 'vant';
import router from './router/index';
import MyHeader from './components/AppHeader.vue';
import BottomNav from './components/AppBottomNav.vue';

Vue.prototype.$eventBus = new Vue();
Vue.use(Icon);
Vue.use(VanImage);

export default {
  data() {
    return {
      AppHeader: '哈喽帮帮',
    };
  },
  components: {
    MyHeader,
    BottomNav,
  },
  mounted() {
    this.$eventBus.$on('changeHeaderName', (name) => {
      this.AppHeader = name;
    });
  },
  router,
};
</script>

<style lang="scss">
</style>
