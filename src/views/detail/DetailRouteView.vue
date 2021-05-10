<template>
  <div>
    <router-header class="fixed w-full z-20" :HeaderRouterItems="routers"></router-header>
    <div class="pt-8 z-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import RouterHeader from '../../components/DetailRouterHeader.vue';

export default {
  data() {
    return {
      routers: [
        {
          id: 0,
          name: '帮帮公益',
          path: '/detail/welfare',
        },
        {
          id: 1,
          name: '帮帮快递',
          path: '/detail/deliver',
        },
        {
          id: 2,
          name: '帮帮求助',
          path: '/detail/helper',
        },
        {
          id: 3,
          name: '帮帮闲置',
          path: '/detail/aside',
        },
        {
          id: 4,
          name: '帮帮外卖',
          path: '/detail/food',
        },
      ],
    };
  },
  components: {
    RouterHeader,
  },
};
</script>

<style>
</style>
