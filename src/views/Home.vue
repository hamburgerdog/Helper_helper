<template>
  <div class="p-2 flex flex-col items-center">
    <van-image
      class="w-68 rounded-xl overflow-hidden"
      height="8rem"
      fit="fill"
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
    />
    <div class="grid grid-cols-2 w-full justify-around gap-2 mt-2">
      <home-item
        v-for="HomeItem in HomeItems"
        :key="HomeItem.id"
        :parentInfo="HomeItem"
      ></home-item>
    </div>
    <div
      class="bg-yellow-200 rounded-tl-full rounded-tr-full h-14 w-28 fixed bottom-16 flex flex-col items-center opt-light"
    >
      <van-icon class="w-8" :name="opt"></van-icon>
      <p class="text-white text-base font-medium">发布</p>
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
import opt from '../assets/icon/home/operation.png';

export default {
  data() {
    return {
      HomeItems: [
        {
          id: 1,
          icon: HomeWelfare,
          name: '帮帮公益',
          path: '/detail/helper',
        },
        {
          id: 2,
          icon: HomeDeliver,
          name: '帮帮快递',
          path: '/detail/helper',
        },
        {
          id: 3,
          icon: HomeHelp,
          name: '帮帮求助',
          path: '/detail/helper',
        },
        {
          id: 4,
          icon: HomeAside,
          name: '帮帮闲置',
          path: '/detail/helper',
        },
        {
          id: 5,
          icon: HomeFood,
          name: '帮帮外卖',
          path: '/detail/helper',
        },
        {
          id: 6,
          icon: HomePlay,
          name: '吃喝玩乐',
          path: '/detail/helper',
        },
      ],
      opt,
    };
  },
  components: {
    HomeItem,
  },
};
</script>

<style>
@keyframes opt-shadows {
  0% {
    box-shadow: 0 0 0.5rem #ffe979;
  }
  50% {
    box-shadow: 0 0.5rem 3rem yellow;
  }
  100% {
    box-shadow: 0 0 0.5rem #ffe979;
  }
}

.opt-light {
  animation: opt-shadows 3s infinite ease-out;
}
</style>
