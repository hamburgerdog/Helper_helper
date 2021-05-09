<template>
  <div class="flex bg-white justify-around p-2">
    <div v-for="row in HeaderRows" :key="row.id" @click="active(row.id)">
      <p class="text-xs text-gray-400 font-light" ref="row">
        {{ row.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['HeaderRows'],
  methods: {
    active(id) {
      this.$refs.row.forEach((item) => item.classList.remove('row-active'));
      this.$refs.row[id].classList.add('row-active');
    },
  },
  mounted() {
    this.active(0);
  },
};
</script>

<style lang="scss" scoped>
.row-active {
  font-weight: 400;
  color: #ffe979;
}
</style>
