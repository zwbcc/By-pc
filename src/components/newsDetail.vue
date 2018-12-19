<template>
  <div class="container">
    <div class="top">
      <div :class="['item',{active:itemList.types == item.id}] " v-for="item in typeList" :key="item.id" @click="backNews" >{{item.name}}</div>
    </div>
    <div class="bottom">
     <div class="item">
       <h2>{{itemList.title}}</h2>
       <h3>发布时间：{{ itemList.issue_time | dateFormat }}</h3>
       <div v-html="itemList.content"></div>
     </div>
     <div class="recommend">
       <h2>推荐咨询</h2>
       <div class="list" v-for="item in recList" :key="item.id" tag="div" @click="goReco(item.id)">
         <img :src="item.picture" alt="">
         <div class="text">
           <h3>{{ item.title }}</h3>
           <div v-html="lessContent(item.content)"></div>
         </div>
       </div>
     </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goReco(id) {
      this.$emit("goReco", id);
    },
    backNews (){
      let link = this.$route.path.split("/")[1]
      this.$router.push('/'+link)
    },
    lessContent (value) {
      let content = value.substring(0, 25)
      return content + '...'
    },
  },
  props: {
    itemList: Object,
    recList: Array,
    typeList: Array
  },

};
</script>
<style lang="stylus" scoped>
.active 
  background #00a2e9
  color #fff
.container
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
      text-align center
      h2 
        font-size 18px
        color #434343
      h3 
        font-size 14px
        color #666  
        margin .2rem 0
      div
        font-size 8px
        text-indent 2em
        text-align left
        color #666
        line-height 10px
    .recommend
      h2 
        margin-top .2rem
        font-size 12px
        color #434343
        line-height .5rem
        background #eee
      .list 
        display flex
        padding .2rem 0
        border-bottom 1px solid #ccc
        img 
          width 1.34rem
          height 1.36rem
          margin-right .2rem
        .text 
          flex 1
          text-align left 
          h3 
            font-size 12px
            color #434343
            margin-bottom .2rem
          div 
            font-size 8px
            color #666
            line-height 10px


</style>
