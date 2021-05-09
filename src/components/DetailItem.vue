<template>
  <div class="bg-white rounded-lg m-2 pt-2 pb-2">
    <div class="flex justify-between text-sm border-b border-gray-200 p-2 pt-0">
      <nobr class="text-gray-800 overflow-hidden overflow-ellipsis w-3/4">{{
        DetailMsg.title
      }}</nobr>
      <span class="text-yellow-200">{{ DetailMsg.className }}</span>
    </div>
    <div class="text-xs pl-2 pr-2 text-gray-500 mt-4">
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
