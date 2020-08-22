<template>
  <div class="tab-control">
    <div @click="click(index)" class="tab-control-item" v-for="(item,index) in title" :key="index">
      <span :class="{active: curIndex===index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curIndex: 0,
    };
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    click(index) {
      this.curIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  background-color: #fff;

  /* position: sticky;
  top: 44px; */
}

.tab-control-item {
  flex: 1;
  text-align: center;
}

.active {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
  padding: 5px;
}
</style>
