<template>
  <div class="container">
     <div class="top">
       <div class="item">
         <img src="../assets/images/prodetail1.png" alt="">
         <div class="text">
           <p>气氛嘛来嘛弗拉门戈‘评价我拼命’说了父母商量了忘记饿了就是犯贱了无人机怕【热排位就买票假名牌没发票</p>
           <p>气氛嘛来嘛弗拉门戈‘评价我拼命’说了父母商量了忘记饿了就是犯贱了无人机怕【热排位就买票假名牌没发票</p>
           <p>气氛嘛来嘛弗拉门戈‘评价我拼命’说了父母商量了忘记饿了就是犯贱了无人机怕【热排位就买票假名牌没发票</p>
           <p>气氛嘛来嘛弗拉门戈‘评价我拼命’说了父母商量了忘记发票</p>
         </div>
       </div>
        <div class="item">
         <img src="../assets/images/prodetail1.png" alt="">
         <div class="text">
           <p>气氛嘛来嘛弗拉门戈‘评价我拼命’说了父母商量了忘记饿了就是犯贱了无人机怕【热排位就买票假名牌没发票</p>
           <p>气氛嘛来嘛弗拉门戈‘评价我拼命’说了父母商量了忘记饿了就是犯贱了无人机怕【热排位就买票假名牌没发票</p>
           <p>气氛嘛来嘛弗拉门戈‘评价我拼命’说了父母商量了忘记饿了就是犯贱了无人机怕【热排位就买票假名牌没发票</p>
           <p>气氛嘛来嘛弗拉门戈‘评价我拼命’说了父母商量了忘记发票</p>
         </div>
       </div>
    </div>
    <div class="bottom">
      <div class="image">
        <h2>实拍产品</h2>
          <div v-for="item in pics" :key="item.id">
           <img  :src="item" alt="阿三打撒">
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pics: Array,
    detailList: Object
  }
};
</script>
<style lang="stylus" scoped>
.top 
  padding .2rem .3rem
  .item 
    display flex 
    margin-bottom .4rem
    &:nth-child(2n)
      flex-direction row-reverse
      img 
        margin-left .2rem
        margin-right 0
    img 
      width 3.4rem
      height 4rem
      margin-right  .2rem
    .text 
      flex 1 
    p 
      font-size 12px 
      color #666
      line-height 14px
.bottom 
  border-top .2rem solid #eee
  padding 0 .3rem
  text-align center
  h2 
    margin .4rem 0 
    font-size 16px 
    color #434343
  img 
    width 100% 
    height 7rem 
    margin-bottom .2rem
</style>
