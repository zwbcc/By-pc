<template>
  <div>
    <div class="top">
      <div :class="['item',{active:item.id == index}]" v-for="item in typeList" :key="item.id" @click="getList(item.id)">{{ item.name }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    typeList: Array,
    index: {
      type: [String, Number],
      default: 0
    }
  },
  methods: {
    getList(id) {
      this.$emit("getList", id);
    }
  }
};
</script>
<style lang="stylus" scoped>
.active 
  background #00a2e9
  color #fff
.top 
  padding .2rem .3rem
  display flex
  flex-wrap wrap
  border-bottom .2rem solid #eee
  .item
    text-align center
    margin .2rem 2% 0
    line-height .6rem
    font-size 12px
    width 20%
    height .6rem
    border 1px solid #00a2e9
    overflow hidden
    white-space nowrap
    -ms-text-overflow: ellipsis
    text-overflow: ellipsis
</style>
