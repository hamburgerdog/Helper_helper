<template>
  <div class="flex flex-row justify-around bg-white">
    <div v-for="header in RoutersHeader" :key="header.id">
      <router-header-item :item="header"></router-header-item>
    </div>
  </div>
</template>

<script>
import RouterHeaderItem from './RouterHeaderItem.vue';

export default {
  components: { RouterHeaderItem },
  props: ['RoutersHeader'],
};
</script>

<style>
</style>
