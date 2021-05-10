<template>
  <div class="pt-16">
    <van-image
      class="w-68 overflow-hidden fixed top-14"
      height="6rem"
      fit="fill"
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
    />
    <div class="mt-4">
      <div>
        <detail-money-item></detail-money-item>
        <detail-money-item></detail-money-item>
        <detail-money-item></detail-money-item>
        <detail-money-item></detail-money-item>
        <detail-money-item></detail-money-item>
        <detail-money-item></detail-money-item>
        <detail-money-item></detail-money-item>
      </div>
    </div>
  </div>
</template>

<script>
import DetailMoneyItem from '../../components/DetailMoneyItem.vue';

export default {
  components: { DetailMoneyItem },
  mounted() {
    this.$eventBus.$emit('changeHeaderName', '帮帮求助');
  },
};
</script>

<style lang="scss" scoped>
</style>
