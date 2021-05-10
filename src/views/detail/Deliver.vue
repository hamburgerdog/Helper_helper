<template>
  <div>
    <detail-money-item></detail-money-item>
  </div>
</template>

<script>
import DetailMoneyItem from '../../components/DetailMoneyItem.vue';

export default {
  components: { DetailMoneyItem },

  mounted() {
    this.$eventBus.$emit('changeHeaderName', '帮帮快递');
  },
};
</script>

<style>
</style>
