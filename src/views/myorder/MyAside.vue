<template>
  <div>
    <div class="bg-white">
      <router-header-item :item="Header"></router-header-item>
    </div>
  </div>
</template>

<script>
import RouterHeaderItem from '../../components/RouterHeaderItem.vue';

export default {
  data() {
    return {
      Header: {
        name: '我的发布',
        path: '',
        unshowBottom: true,
      },
    };
  },
  components: { RouterHeaderItem },
  mounted() {
    this.$eventBus.$emit('changeHeaderName', '我的闲置');
  },
};
</script>

<style>
</style>
