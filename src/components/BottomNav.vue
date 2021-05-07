<template>
  <div class="grid grid-cols-3 h-16 w-full">
    <div
      class="text-center text-gray-400 text-xs flex flex-col items-center border-t-2 pt-2"
      v-for="nav in navs"
      :key="nav.id"
      @click="doRoute(nav.path)"
    >
      <van-icon :name="nav.icon" class="w-8"></van-icon>
      <span> {{ nav.name }}</span>
    </div>
  </div>
</template>

<script>
import HomeIcon from '../assets/icon/home-fill.png';
import OrderIcon from '../assets/icon/order-fill.png';
import SettingIcon from '../assets/icon/set.png';

export default {
  data() {
    return {
      navs: [
        {
          id: 1,
          name: '首页',
          path: '/home',
          icon: HomeIcon,
        },
        {
          id: 2,
          name: '帮帮订单',
          path: '/order',
          icon: OrderIcon,
        },
        {
          id: 3,
          name: '我的',
          path: '/setting',
          icon: SettingIcon,
        },
      ],
    };
  },
  methods: {
    doRoute(path) {
      if (this.$route.path === path) return;
      this.$eventBus.$emit('replaceRoute', { path });
    },
  },
};
</script>

<style>
</style>
