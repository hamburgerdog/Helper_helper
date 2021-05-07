<template>
  <div>
    <div
      class="order-item bg-opacity-30 text-center h-14 w-full pt-2 rounded-md"
    >
      <div class="flex flex-row items-center justify-center gap-4">
        <van-icon class="w-10" :name="parentInfo.icon"></van-icon>
        <span class="text-1xl font-mono">{{ parentInfo.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['parentInfo'],
};
</script>

<style lang="scss" scoped>
.order-item {
  background-color: #fff5c3;
}
</style>
