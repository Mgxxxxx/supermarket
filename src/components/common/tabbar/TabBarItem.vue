<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="img">
        <img src="~assets/img/tabbar/home.svg" alt />
      </slot>
    </div>
    <div v-else>
      <slot name="activeImg">
        <img src="~assets/img/tabbar/home_active.svg" alt />
      </slot>
    </div>
    <div :style="activeStyle">
      <slot name="title">
        <div>首页</div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    path: {
      type: String,
      default: "",
    },
    activeColor: {
      type: String,
      default: "red",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  height: 49px;
}

img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 3px 0;
}
</style>
