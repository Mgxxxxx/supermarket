<template>
  <div class="good-list">
    <good-list-item :good="good" v-for="(good,index) in goods" :key="index"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem";
export default {
  data() {
    return {};
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodListItem,
  },
};
</script>

<style scoped>
.good-list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 2px;
}
</style>
