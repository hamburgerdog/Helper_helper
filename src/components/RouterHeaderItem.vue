<template>
  <div>
    <router-link
      class="flex flex-col items-center text-center text-gray-400"
      :to="item.path"
      replace
      :active-class="
        !this.item.unshowBottom ? 'item-active' : 'item-unshow-active'
      "
    >
      <p class="leading-loose item-p w-16 text-sm">{{ item.name }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['item'],
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

.item-unshow-active {
  color: #333;
}
</style>
