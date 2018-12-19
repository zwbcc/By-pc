<template>
  <div class="container">
    <router-link class="category_item" to="/about" tag="div">
      <img src="../../../assets/images/category1.png" alt="">
      <span>关于我们</span>
    </router-link>
    <router-link class="category_item" to="/news" tag="div">
      <img src="../../../assets/images/category5.png" alt="">
      <span>企业新闻</span>
    </router-link>
    <router-link class="category_item" to="/contact" tag="div">
      <img src="../../../assets/images/category4.png" alt="">
      <span>联系我们</span>
    </router-link>
    <router-link class="category_item" to="/product" tag="div">
      <img src="../../../assets/images/category7.png" alt="">
      <span>制冷产品</span>
    </router-link>
    <router-link class="category_item" to="/device" tag="div">
      <img src="../../../assets/images/category3.png" alt="">
      <span>冷库设备</span>
    </router-link>
    <router-link class="category_item" to="/market" tag="div">
      <img src="../../../assets/images/category6.png" alt="">
      <span>商超设备</span>
    </router-link>
    <router-link class="category_item" to="/construct" tag="div">
      <img src="../../../assets/images/category2.png" alt="">
      <span>冷库建造</span>
    </router-link>
    <router-link class="category_item" to="/engineering" tag="div">
      <img src="../../../assets/images/category8.png" alt="">
      <span>制冷工程</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Category"
};
</script>
<style lang="stylus" scoped>
.container
  display flex
  padding .4rem .3rem
  flex-wrap wrap
  .category_item
    width 25%
    display flex
    flex-direction column
    justify-content center
    align-items center
    img 
      width 1.2rem
      height 1.2rem
    span 
      font-size 14px
      margin .2rem 0 .3rem 0
      
</style>
