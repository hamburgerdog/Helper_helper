<template>
  <div>
    <div
      class="flex overflow-x-auto flex-shrink-0 bg-white border-b border-gray-200 pt-1 gap-3"
    >
      <router-header-item
        v-for="item in HeaderRouterItems"
        :item="item"
        :key="item.id"
      ></router-header-item>
    </div>
  </div>
</template>

<script>
import RouterHeaderItem from './RouterHeaderItem.vue';

export default {
  components: { RouterHeaderItem },
  props: ['HeaderRouterItems'],
};
</script>

<style lang="scss" scoped>
.item-active {
  color: black;

  .item-p:after {
    display: block;
    width: 3.5em;
    height: 2px;
    margin: auto;
    background-color: #ffe979;
    content: '';
  }
}
</style>
