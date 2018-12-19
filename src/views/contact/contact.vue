<template>
  <div>
    <div class="top line">
       <h2>联系方式</h2>
       <h3>{{ large.name }}</h3>
       <p>地址：{{ large.area }}</p>
       <p>电话：{{ large.phone }}</p>
       <p>传真：{{ large.facsimile }}</p>
       <p>email: {{ large.email }}</p>
    </div>
    <img src="../../assets/images/map.png" alt="">
    <div class="bottom line">
      <h2>其他分部</h2>
      <div class="list">
        <div class="text" v-for="item in other" :key="item.id">
          <h4>{{ item.name }}</h4>
          <p>地址：{{ item.area }}</p>
          <p>电话：{{ item.phone }}</p>
          <p>传真：{{ item.facsimile }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      large: '',
      other: []
    }
  },
  methods: {
    async getItemList () {
      const res = await this.$http.get('/by/user/relation/getRelationList')
      if(res.data.code === 0) {
        const data = res.data.object.list
        this.large = data.splice(0,1)[0]
        this.other = data
      }
    }
  },
  created() {
    this.getItemList()
  } 
};
</script>
<style lang="stylus" scoped>
img 
  width 100%
  height 3.02rem

h2 
  z-index 9999
  font-size 16px
  text-align center
  font-weight 700
.line
  position relative
  &::after
    content ''
    width 35%
    height 2px
    background #aaa
    position absolute
    left 0
    top 8px
  &::before
    content ''
    width 35%
    height 2px
    background #aaa
    position absolute
    right  0
    top 8px
.top
  margin .4rem
  padding 0 .3rem
  h3 
    font-size 18px
    margin .4rem  0
  p 
    margin-bottom .2rem 
    font-size 14px
.bottom
  margin .4rem
  .list 
    margin .4rem 0 
    display flex
    flex-wrap wrap
    justify-content space-between
    .text 
      margin-bottom .4rem
      width 42%
      box-shadow 0 0 6px #aaa
      height 2.8rem
      padding 0 .2rem
      h4 
        text-align center
        font-size 16px
        margin .2rem
      p
        font-size 12px
        margin-bottom .2rem
        line-height 14px


</style>
