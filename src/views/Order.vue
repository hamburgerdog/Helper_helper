<template>
  <div>
    <div class="flex flex-col gap-3 p-2 mt-1">
      <div class="w-full" v-for="OrderItem in OrderItems" :key="OrderItem.id">
        <order-item :parentInfo="OrderItem"></order-item>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import OrderItem from '../components/PageItem.vue';

import WelfareIcon from '../assets/icon/order/welfare.png';
import DeliverIcon from '../assets/icon/order/deliver.png';
import HelpIcon from '../assets/icon/order/help.png';
import AsideIcon from '../assets/icon/order/aside.png';
import FoodIcon from '../assets/icon/order/food.png';

export default {
  data() {
    return {
      OrderItems: [
        {
          id: 1,
          icon: WelfareIcon,
          name: '我的公益',
        },
        {
          id: 2,
          icon: DeliverIcon,
          name: '我的快递',
        },
        {
          id: 3,
          icon: HelpIcon,
          name: '我的求助',
        },
        {
          id: 4,
          icon: AsideIcon,
          name: '我的闲置',
        },
        {
          id: 5,
          icon: FoodIcon,
          name: '我的外卖',
        },
      ],
    };
  },
  components: {
    OrderItem,
  },
  mounted() {
    this.$eventBus.$emit('changeHeaderName', '帮帮订单');
  },
};
</script>

<style>
</style>
