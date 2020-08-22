<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.nav-bar {
  height: 44px;
  width: 100%;
  line-height: 44px;
  display: flex;
  text-align: center;
}

.left,
.right {
  width: 60px;
  height: 100%;
}

.center {
  flex: 1;
}
</style>
