<template>
 <div>
    <div class="top">
       <div :class="['item',{active:item.id == index}]" v-for="item in typeList" :key="item.id" @click="getItemList(item)">{{ item.name }}</div>
    </div>
    <div class="bottom">
      <div class="item" v-for="item in itemList" :key="item.id" @click="goDetail(item.id)">
        <h2>{{ types | transfType }}</h2>
        <div class="text">
          <div class="title">
            <h3>{{ item.title }}</h3>
            <img src="../assets/images/arrow.png" alt="">
          </div>
          <p>工程名称：{{ item.title }}</p>
          <p v-html="lessContent(item.content)"></p>
        </div>
      </div>
    </div>
    <div></div>
 </div>
</template>
<script>
export default {
  data() {
    return {
      types:''
    }
  },
  props: {
    typeList:Array,
    itemList:Array,
    index:{
      type:[ String,Number]
    }
  },
  methods: {
    getItemList(item){
      this.types = item.name
      this.$emit('getItemList',item.id)
    },
    // 过滤内容过长
    lessContent(value) {
      let content = value.substring(0, 30);
      return content + "...";
    },
    goDetail(id){
      this.$emit('goDetail',id)
    }
  },
  filters:{
    transfType:function(value){
       return value.substring(0,2) 
    }
  },
  watch:{
    'typeList':function(newData){
      this.types = newData[0].name
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
  border-bottom 20px solid #eee
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
  .item
    display flex
    align-items center
    padding .2rem 0
    border-bottom 1px solid #ccc
    h2
      width .92rem
      height .92rem
      text-align center
      line-height .92rem
      background #999999
      color #fff 
      border-radius 50%
      font-size 18px
      margin-right .3rem
    .text 
      flex 1
      .title 
        display flex 
        justify-content space-between
        h3 
          font-size 17px 
          color #434343
        img 
          width .2rem
          height .216rem
      p 
        margin-top .1rem
        font-size 12px
        color #999999

</style>
