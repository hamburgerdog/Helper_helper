<template>
  <div>
    <my-order-router-header
      :RoutersHeader="RoutersHeader"
    ></my-order-router-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MyOrderRouterHeader from '../../components/MyOrderRouterHeader.vue';

export default {
  data() {
    return {
      RoutersHeader: [
        {
          id: 0,
          name: '我的发布',
          path: '/myorder/food/post',
        },
        {
          id: 1,
          name: '我的接单',
          path: '/myorder/food/run',
        },
      ],
    };
  },
  components: { MyOrderRouterHeader },
  mounted() {
    this.$eventBus.$emit('changeHeaderName', '我的外卖');
  },
};
</script>

<style>
</style>
