<template>
 <div>
    <div class="top">
      <div :class="['item',{active: item.id == index}]" v-for="item in typeList" :key="item.id" @click="getItemList(item.id)">{{item.name}}</div>
    </div>
    <div class="bottom">
      <div class="item" v-for="item in itemList" :key="item.id">
        <img :src="item.picture" alt="">
        <p>{{ item.title }}</p>
      </div>
    </div>
 </div>
</template>
<script>
export default {
  data() {
    return{
      index: '0'
    }
  },
  props: {
    typeList: Array,
    itemList: Array
  },
  methods: {
    getItemList(id){
      this.$emit('getItemList',id)
      this.index = id
    }
  },
}
</script>
<style lang="stylus" scoped>
.active 
  background #00a2e9
  color #fff
.top 
  padding .2rem .3rem
  display flex
  flex-wrap wrap
  border-bottom 10px solid #eee
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

.bottom 
  padding .2rem .3rem 
  display flex
  flex-wrap wrap
  justify-content space-between
  .item 
    width 47%
    box-shadow 0 0 6px #aaa
    margin .2rem 0
    img 
      width 100%
      height 3rem
    p 
      font-size 12px
      margin .2rem 0
      text-align center
</style>
