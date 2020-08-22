<template>
  <div>
    <tab-bar>
      <tab-bar-item activeColor="#ff5777" path="/home"></tab-bar-item>
      <tab-bar-item activeColor="#ff5777" path="/category">
        <img slot="img" src="~assets/img/tabbar/category.svg" alt />
        <img slot="activeImg" src="~assets/img/tabbar/category_active.svg" alt />
        <div slot="title">分类</div>
      </tab-bar-item>
      <tab-bar-item activeColor="#ff5777" path="/cart">
        <img slot="img" src="~assets/img/tabbar/shopcart.svg" alt />
        <img slot="activeImg" src="~assets/img/tabbar/shopcart_active.svg" alt />
        <div slot="title">购物车</div>
      </tab-bar-item>
      <tab-bar-item activeColor="#ff5777" path="/profile">
        <img slot="img" src="~assets/img/tabbar/profile.svg" alt />
        <img slot="activeImg" src="~assets/img/tabbar/profile_active.svg" alt />
        <div slot="title">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>
