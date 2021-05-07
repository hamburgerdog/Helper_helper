<template>
  <div class="p-2 flex flex-col items-center">
    <van-image
      class="w-68 rounded-xl overflow-hidden"
      fit="cover"
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
    />
    <div class="grid grid-cols-2 w-full justify-around gap-2 mt-2">
      <home-item
        v-for="HomeItem in HomeItems"
        :key="HomeItem.id"
        :parentInfo="HomeItem"
      ></home-item>
    </div>
  </div>
</template>

<script>
import HomeItem from '../components/Item.vue';

import HomeWelfare from '../assets/icon/home/welfare.png';
import HomeAside from '../assets/icon/home/aside.png';
import HomeFood from '../assets/icon/home/food.png';
import HomeHelp from '../assets/icon/home/help.png';
import HomePlay from '../assets/icon/home/play.png';
import HomeDeliver from '../assets/icon/home/deliver.png';

export default {
  data() {
    return {
      HomeItems: [
        {
          id: 1,
          icon: HomeWelfare,
          name: '帮帮公益',
        },
        {
          id: 2,
          icon: HomeDeliver,
          name: '帮帮快递',
        },
        {
          id: 3,
          icon: HomeHelp,
          name: '帮帮求助',
        },
        {
          id: 4,
          icon: HomeAside,
          name: '帮帮闲置',
        },
        {
          id: 5,
          icon: HomeFood,
          name: '帮帮外卖',
        },
        {
          id: 6,
          icon: HomePlay,
          name: '吃喝玩乐',
        },
      ],
    };
  },
  components: {
    HomeItem,
  },
};
</script>

<style>
</style>
