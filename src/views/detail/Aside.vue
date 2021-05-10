<template>
  <div class="pt-8">
    <page-header class="header-top" :HeaderRows="ClassRows"></page-header>
    <div v-for="asideMsg in asideMsgs" :key="asideMsg.id">
      <detail-item :DetailMsg="asideMsg"></detail-item>
    </div>
  </div>
</template>

<script>
import DetailItem from '../../components/DetailItem.vue';
import PageHeader from '../../components/DetailHeader.vue';

import message from '../../assets/mock/message';

export default {
  data() {
    return {
      ClassRows: [
        {
          id: 0,
          name: '全部',
        },
        {
          id: 1,
          name: '化妆品',
        },
        {
          id: 2,
          name: '衣服',
        },
        {
          id: 3,
          name: '生活类',
        },
        {
          id: 4,
          name: '学习类',
        },
        {
          id: 5,
          name: '其他',
        },
      ],
      asideMsgs: message.asideMsgs,
    };
  },
  components: {
    PageHeader,
    DetailItem,
  },
  mounted() {
    this.$eventBus.$emit('changeHeaderName', '帮帮闲置');
  },
};
</script>

<style lang="scss" scoped>
</style>
