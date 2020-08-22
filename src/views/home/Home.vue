<template>
  <div id="home">
    <nav-bar class="home-nav">购物车</nav-bar>

    <tab-control
      class="tab-control"
      ref="tabControl2"
      @tabClick="tabClick"
      :title="['流行','新款','精选']"
      v-show="tabIsShow"
    />

    <scroll
      @pullingUp="loadMore"
      :pullUpLoad="true"
      ref="scroll"
      @scroll="scroll"
      :probeType="3"
      class="scroll"
    >
      <home-swiper @swiperLoad="swiperLoad" :banner="banner" />
      <recommend :recommend="recommend" />
      <feature-view />
      <tab-control ref="tabControl1" @tabClick="tabClick" :title="['流行','新款','精选']" />
      <good-list :goods="goods[curType].list" />
    </scroll>

    <back-top @click.native="backTop" v-show="backTopIsShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import HomeSwiper from "views/home/childComps/HomeSwiper";
import Recommend from "views/home/childComps/Recommend";
import FeatureView from "views/home/childComps/FeatureView";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getLocalGoods } from "network/home";

import { debounce } from "common/utils";

export default {
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      curType: "pop",
      backTopIsShow: false,
      tabIsShow: false,
      offsetTop: 0,
      saveY: 0,
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
    BackTop,
  },
  created() {
    this.getHomeMultidata();
    this.getLocalGoods("pop");
    this.getLocalGoods("new");
    this.getLocalGoods("sell");
  },
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh, 100);
    this.$bus.$on("itemLoad", () => {
      refresh();
    });
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.curType = "pop";
          break;
        case 1:
          this.curType = "new";
          break;
        case 2:
          this.curType = "sell";
      }
      this.$refs.tabControl1.curIndex = index;
      this.$refs.tabControl2.curIndex = index;
    },
    scroll(p) {
      this.backTopIsShow = -p.y > 1000;
      this.tabIsShow = -p.y > this.offsetTop;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    swiperLoad() {
      this.offsetTop = this.$refs.tabControl1.$el.offsetTop;
    },
    loadMore() {
      this.getLocalGoods(this.curType);
    },

    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getLocalGoods(type) {
      const page = this.goods[type].page;
      getLocalGoods(type, page).then((res) => {
        if (res) {
          this.goods[type].list.push(...res.list);
          this.goods[type].page++;
        } else {
          console.log("已加载所有商品");
        }
        this.$refs.scroll.finishPullUp();
      });
    },
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
  },
};
</script>

<style scoped>
.home-nav {
  background-color: #ff8198;
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}

#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}

.scroll {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}

.tab-control {
  position: relative;
  z-index: 1;
}
</style>
