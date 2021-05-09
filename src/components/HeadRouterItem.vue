<template>
  <div>
    <div
      class="flex overflow-x-auto flex-shrink-0 bg-white border-b border-gray-200 pt-1 "
    >
      <router-link
        class="flex flex-col items-center text-center text-gray-400"
        v-for="item in HeaderRouterItems"
        :key="item.id"
        :to="item.path"
        active-class="item-active"
      >
        <p class="leading-loose item-p w-16 text-xs">{{ item.name }}</p>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
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
