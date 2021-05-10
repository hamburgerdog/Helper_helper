<template>
  <div>
    <login></login>
    <div class="flex flex-col mt-2">
      <div v-for="settingItem in SettingItems" :key="settingItem.id">
        <setting-item :parentInfo="settingItem"></setting-item>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import Login from '../components/Login.vue';
import SettingItem from '../components/SettingItem.vue';

import money from '../assets/icon/set/money.png';
import info from '../assets/icon/set/info.png';
import like from '../assets/icon/set/like.png';
import message from '../assets/icon/set/message.png';
import helper from '../assets/icon/set/helper.png';

export default {
  data() {
    return {
      SettingItems: [
        {
          id: 0,
          icon: info,
          name: '个人信息',
        },
        {
          id: 1,
          icon: money,
          name: '我的余额',
        },
        {
          id: 2,
          icon: like,
          name: '闲置收藏',
        },
        {
          id: 3,
          icon: message,
          name: '意见反馈',
        },
        {
          id: 4,
          icon: helper,
          name: '联系客服',
        },
      ],
    };
  },
  components: {
    Login,
    SettingItem,
  },
  mounted() {
    this.$eventBus.$emit('changeHeaderName', '我的');
  },
};
</script>

<style>
</style>
