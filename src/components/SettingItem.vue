<template>
  <div
    id="item-box"
    class="item-box-border flex flex-row w-full items-center pr-2 pl-2 gap-2 h-10 bg-white"
  >
    <van-icon :name="parentInfo.icon" class="w-8"></van-icon>
    <p class="w-full">{{ parentInfo.name }}</p>
    <van-icon :name="rigthRow" class="w-4" />
  </div>
</template>

<script>
import rigthRow from '../assets/icon/right-row.png';

export default {
  data() {
    return {
      rigthRow,
    };
  },
  props: ['parentInfo'],
};
</script>

<style lang="scss" scoped>
#item-box:hover{
  background-color: #DDD;
}
</style>
