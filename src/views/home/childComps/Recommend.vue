<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  justify-content: space-around;
  border-bottom: 10px solid #eee;
  padding: 15px 0 20px 0;
}

.recommend-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}

.recommend-item img {
  width: 90%;
}
</style>
