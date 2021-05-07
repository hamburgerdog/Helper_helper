<template>
  <div class="grid grid-cols-3 h-16 w-full">
    <div
      class="text-center text-gray-400 text-xs flex flex-col items-center border-t-2 pt-2"
      v-for="nav in navs"
      :key="nav.id"
      @click="changeRoute(nav)"
      active-class="active"
      ref="navs"
    >
      <van-icon :name="nav.icon" class="w-8"></van-icon>
      <span> {{ nav.name }}</span>
    </div>
  </div>
</template>

<script>
import HomeIcon from '../assets/icon/nav/home.png';
import HomeIconActive from '../assets/icon/nav/home-active.png';
import OrderIcon from '../assets/icon/nav/order.png';
import OrderIconActive from '../assets/icon/nav/order-active.png';
import SettingIcon from '../assets/icon/nav/setting.png';
import SettingIconActive from '../assets/icon/nav/setting-active.png';

export default {
  data() {
    return {
      navs: [
        {
          id: 0,
          name: '首页',
          path: '/home',
          icon: HomeIcon,
        },
        {
          id: 1,
          name: '帮帮订单',
          path: '/order',
          icon: OrderIcon,
        },
        {
          id: 2,
          name: '我的',
          path: '/setting',
          icon: SettingIcon,
        },
      ],
      navIcons: [HomeIcon, OrderIcon, SettingIcon],
      navActiveIcons: [HomeIconActive, OrderIconActive, SettingIconActive],
    };
  },
  methods: {
    //  防止多次点击 记得不要写 !XXX===XXX 而是 !== 不然会出莫名其妙的错误，且不会报错。。。。
    //  不过只有我这种呆瓜才会写错吧。。。
    shouldChangeRoute(nav) {
      return this.$route.path !== nav.path;
    },
    changeIcon(icons, index) {
      for (let i = 0; i < 3; i += 1) {
        //  将所有图标都初始化成最初状态
        this.navs[i].icon = this.navIcons[i];
      }
      this.navs[index].icon = icons[index];
    },
    clearActiveClass() {
      let i = NaN;
      //  类数组应当先转换 根据类名清除特定节点数据
      this.$refs.navs.forEach((nav, index) => {
        if (Array.from(nav.classList).includes('active')) {
          i = index;
        }
      });
      this.$refs.navs[i].className = this.$refs.navs[i].className.slice(
        0,
        -' active'.length,
      );
    },
    //  编程式更换路由，由于使用了png做图标，这是无奈之举，如果有可能图标尽量选择可被css控制的
    changeRoute(nav) {
      if (!this.shouldChangeRoute(nav)) return;
      this.clearActiveClass();
      this.$router.replace(nav.path);
      this.changeIcon(this.navActiveIcons, nav.id);
      this.$refs.navs[nav.id].className += ' active';
    },
  },
  //  挂载时需要根据当前路由先行更新状态栏
  mounted() {
    let id = 0;
    this.navs.forEach((nav, index) => {
      if (nav.path === this.$route.path) id = index;
    });
    this.changeIcon(this.navActiveIcons, id);
    this.$refs.navs[id].className += ' active';
  },
};
</script>

<style>
.active {
  color: #ffe979 !important;
}
</style>
