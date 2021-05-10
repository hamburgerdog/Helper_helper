<template>
  <div class="bg-yellow-200 h-12 pt-4 flex justify-between items-center">
    <div class="w-6" @click="goBack">
      <van-icon
        ref="LeftRow"
        :name="LeftRow"
        :style="{ display: canShow ? 'block' : 'none' }"
      ></van-icon>
    </div>
    <p class="text-xl text-center text-white">{{ AppHeader }}</p>
    <div class="w-6"></div>
  </div>
</template>

<script>
import LeftRow from '../assets/icon/left-row.png';

export default {
  props: ['AppHeader'],
  data() {
    return {
      LeftRow,
      canShow: false,
    };
  },
  beforeUpdate() {
    if (this.$route.path.includes('/detail')) {
      this.canShow = true;
      return;
    }
    this.canShow = false;
  },
  methods: {
    goBack() {
      //  防止首页等不需回退的地方误触、不设置不可见是为了让flex布局稳定
      if (this.canShow) {
        this.$router.back();
      }
    },
  },
};
</script>

<style>
</style>
