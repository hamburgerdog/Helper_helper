<template>
  <div class="detail-container">
    <div class="detail-box">
      <nobr class="detail-title">{{
        DetailMsg.title
      }}</nobr>
      <span class="text-yellow-200">{{ DetailMsg.className }}</span>
    </div>
    <div class="detail-msg">
      <p>
        {{ DetailMsg.detailMsg | ellipsis }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['DetailMsg'],
  filters: {
    ellipsis(value) {
      if (!value) return '';
      if (value.length > 45) {
        return `${value.slice(0, 45)}...`;
      }
      return value;
    },
  },
};
</script>

<style>
</style>
