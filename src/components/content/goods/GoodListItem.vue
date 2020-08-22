<template>
  <div class="good">
    <img :src="good.img" alt @load="itemLoad" />
    <div class="good-info">
      <div>{{good.title}}</div>
      <span>￥{{good.price}}</span>
      <span>{{good.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    good: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    itemLoad() {
      this.$bus.$emit("itemLoad");
    },
  },
};
</script>

<style scoped>
.good {
  width: 48%;
  font-size: 12px;
}

.good img {
  width: 100%;
  border-radius: 5px;
}

.good-info {
  margin: 5px 0;
  text-align: center;
}

.good-info div {
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 3px;
}

.good-info span:nth-of-type(1) {
  color: var(--color-high-text);
  margin-right: 5px;
}

.good-info span:nth-of-type(2)::before {
  content: "";
  display: inline-block;
  vertical-align: text-top;
  width: 12px;
  height: 12px;
  background: url("~assets/img/common/collect.svg") center/12px 12px;
}
</style>
