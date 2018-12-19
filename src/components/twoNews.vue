<template>
 <div>
    <div class="top">
      <div class="item active" >医疗库</div>
      <div class="item">物流冷库</div>
      <div class="item">食品冷库</div>
      <div class="item">餐饮冷库</div>
      <div class="item">科研冷库</div>
      <div class="item">气调冷库</div>
      <div class="item">速冻冷库</div>
      <div class="item">工业冷库</div>
    </div>
    <div class="bottom">
      <router-link to="/news/detail" class="item" tag="div">
        <h2>医疗</h2>
        <div class="text">
          <div class="title">
            <h3>雅玛多大型物流冷库工程</h3>
            <img src="../assets/images/arrow.png" alt="">
          </div>
          <p>工程名称：雅玛多（中国）大型物流工程</p>
          <p>概况：2009年1月我公司与....</p>
        </div>
      </router-link>
      <router-link to="/news/detail" class="item" tag="div">
        <h2>医疗</h2>
        <div class="text">
          <div class="title">
            <h3>雅玛多大型物流冷库工程</h3>
            <img src="../assets/images/arrow.png" alt="">
          </div>
          <p>工程名称：雅玛多（中国）大型物流工程</p>
          <p>概况：2009年1月我公司与....</p>
        </div>
      </router-link>
      <router-link to="/news/detail" class="item" tag="div">
        <h2>医疗</h2>
        <div class="text">
          <div class="title">
            <h3>雅玛多大型物流冷库工程</h3>
            <img src="../assets/images/arrow.png" alt="">
          </div>
          <p>工程名称：雅玛多（中国）大型物流工程</p>
          <p>概况：2009年1月我公司与....</p>
        </div>
      </router-link>
      <router-link to="/news/detail" class="item" tag="div">
        <h2>医疗</h2>
        <div class="text">
          <div class="title">
            <h3>雅玛多大型物流冷库工程</h3>
            <img src="../assets/images/arrow.png" alt="">
          </div>
          <p>工程名称：雅玛多（中国）大型物流工程</p>
          <p>概况：2009年1月我公司与....</p>
        </div>
      </router-link>
    </div>
 </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
.active 
  background #00a2e9
  color #fff
.top 
  padding .2rem .3rem
  display flex
  flex-wrap wrap
  justify-content space-between
  border-bottom 20px solid #eee
  .item
    text-align center
    margin-top .2rem
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
