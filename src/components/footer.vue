<template>
<div class="container">
  <div class="footer_left">
    <div class="title">
      <img src="../assets/images/phone.png" alt="">
      <p>冰宇制冷客服热线</p>
      <p>888-8888-888</p>
    </div>
    <p class="text">公司地址：广东省广州市天河区白云镇棠sdsadsadsdsads号</p>
    <p class="text">邮箱：1111111@qq.com</p>
    <p class="text">copyright@2018冰宇制冷有限公司</p>
  </div>
  <img src="" alt="">
</div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style lang="stylus" scoped>
.container
  width 100%
  box-sizing border-box
  padding .4rem .3rem
  display flex
  background #00a2e9
  align-items center
  img 
    margin 0 .4rem
    width 2rem
    height 2rem
    background #ffffff
  .footer_left
    display flex
    flex 1
    flex-direction column
    color #ffffff
    .title
      font-size 17px
      margin-bottom .4rem
      position relative
      img 
        position absolute
        width .8rem
        height .8rem
        background #00a2e9
        margin 0
        border-radius 50%
        top -5px
      p
        margin-left 1.0rem
    .text
      font-size 10px
      margin-bottom .2rem  
      line-height .26rem

</style>
