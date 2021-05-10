<template>
  <div class="pt-8">
    <page-header
      class="header-top"
      :HeaderRows="ClassRows"
    ></page-header>
    <div v-for="helpMsg in HelpMsgs" :key="helpMsg.id">
      <detail-item :DetailMsg="helpMsg"></detail-item>
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
          name: '寻物启事',
        },
        {
          id: 2,
          name: '失物招领',
        },
        {
          id: 3,
          name: '找队友',
        },
      ],
      HelpMsgs: message.helpMsgs,
    };
  },
  components: {
    PageHeader,
    DetailItem,
  },
  mounted() {
    this.$eventBus.$emit('changeHeaderName', '帮帮公益');
  },
};
</script>

<style lang="scss" scoped>
</style>
