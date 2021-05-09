<template>
  <div>
    <header-item :HeaderRouterItems="routers"></header-item>
  </div>
</template>

<script>
import HeaderItem from '../../components/HeadRouterItem.vue';

export default {
  data() {
    return {
      routers: [
        {
          id: 0,
          name: '帮帮公益',
          path: '/detail/helper',
        },
        {
          id: 1,
          name: '帮帮快递',
          path: '/detail0',
        },
        {
          id: 2,
          name: '帮帮求助',
          path: '/detail1',
        },
        {
          id: 3,
          name: '帮帮闲置',
          path: '/detail2',
        },
        {
          id: 4,
          name: '帮帮外卖',
          path: '/detail3',
        },
      ],
    };
  },
  components: {
    HeaderItem,
  },
};
</script>

<style>
</style>
