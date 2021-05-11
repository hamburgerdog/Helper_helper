<template>
  <div>
    <detail-header :HeaderRows="ClassRows"></detail-header>
  </div>
</template>

<script>
import DetailHeader from './DetailHeader.vue';

export default {
  components: { DetailHeader },
  data() {
    return {
      ClassRows: [
        {
          id: 0,
          name: '全部',
        },
        {
          id: 1,
          name: '待接单',
        },
        {
          id: 2,
          name: '进行中',
        },
        {
          id: 3,
          name: '已完成',
        },
        {
          id: 4,
          name: '已取消',
        },
      ],
    };
  },
};
</script>

<style>
</style>
