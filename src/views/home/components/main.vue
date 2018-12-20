<template>
  <div class="container">
    <div class="about">
      <h3 class="title">关于我们</h3>
      <p class="en">ABOUT US</p>
      <div class="text">
        <p>福建冰宇制冷设备工程有限公司是集制冷产品设计、产品开发、产品制造、产品销售、工程成套、售后服务、技术咨询为一体的一站式服务公司。</p>
        <p>公司以生产和定制各种制冷设备，销售及制冷工程主导，专业安装组合式冷冻库、速冻库、冷藏库、保鲜库、实验库、防爆库和超低温（0℃至-120℃）库、工业冷水机组、制冰池、单冻机，速冻隧道、真空预冷...</p>
        <p>公司产品按照欧洲标准设计，采用先进的制造工艺以及严格的质量控制提醒，确保了产品的高质量、高稳定性和耐用性。公司拥有自营进出口权，可为国内外用户提供由设计到生产、制作安装整套工艺流程等系列制冷配套项目，能满足客户的各种需要。</p>
        <p>产品广泛的应用于食品、医疗卫生、冷链物流、船舶冷冻、生物工程、果蔬、水产品、超市、电子、酒店服务业等各行业。在发展的过程中，公司始终本着以人为本，以科技促发展的经营理念，和上海北京多所大学及科研机构联合协作，致力于产品升级、节...</p>
        <router-link to="/about" tag="button">查看更多</router-link>
      </div>
    </div>
    <div class="service">
      <h3 class="title">冰宇制冷 服务项目</h3>
      <p class="en">BINGYUZHILENG SERVICE PROJECT</p>
      <div class="content">
        <div class="item">
          <img src="../../../assets/images/service1.png" alt="">
          <p>物流冷库</p>
        </div>
         <div class="item">
          <img src="../../../assets/images/service2.png" alt="">
          <p>物流冷库</p>
        </div>
         <div class="item">
          <img src="../../../assets/images/service3.png" alt="">
          <p>物流冷库</p>
        </div>
         <div class="item">
          <img src="../../../assets/images/service4.png" alt="">
          <p>物流冷库</p>
        </div> <div class="item">
          <img src="../../../assets/images/service5.png" alt="">
          <p>物流冷库</p>
        </div>
         <div class="item">
          <img src="../../../assets/images/service6.png" alt="">
          <p>物流冷库</p>
        </div>
      </div>
    </div>
    <div class="video">
      <h3 class="title">视频中心</h3>
      <p class="en">VIDEO CENTER</p>
      <div class="content">
        <video class="by_video" preload="none" src="http://www.kvjv.com/file/upload/201412/15/haoshuang13.mp4"  controls="controls"  poster="http://www.kvjv.com/video.jpg"></video>
      </div>
    </div>
    <div class="line"></div>
    <div class="product">
      <h3 class="title">产品中心 </h3>
      <p class="en">PRODUCT CENTER</p>
      <div class="content">
        <div class="wrapper">
          <swiper :options="swiperOption" class="swiper-container" >
            <swiper-slide class="swiper-item" v-for="item in productList" :key="item.id"  >
              <div class="swiper_list" @click="goProduct(item.id)">
                <img :src="item.picture" alt="">
                <h3>{{ item.title }}</h3>
                <p v-html="lessContent(item.content)">
                </p>
              </div>
            </swiper-slide>
          </swiper>
          <router-link to="/product" tag="button">查看更多</router-link>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="anli">
      <h3 class="title">工程案例</h3>
      <p class="en">SERVICE PROCESS</p>
      <div class="content">
        <div class="item" v-for="item in projectList" :key="item.id" @click="goProject(item.id)">
          <img :src="item.picture" alt="">
          <p v-html="lessContent(item.content)"></p> 
        </div>
        <router-link to="/construct" tag="button">查看更多</router-link>
      </div>
    </div>
    <div class="line"></div>
    <div class="news">
      <h3 class="title">公司新闻</h3>
      <p class="en">COMPANY NEWS</p>
      <div class="content">
        <div class="news_item" v-for="item in newList" :key="item.id" @click="goNews(item.id)">
          <img :src="item.picture" alt="">
          <div class="news_text">
            <h4>{{ item.title }}</h4>
            <div v-html="lessContent(item.content)"></div>
          </div>
        </div>
        <router-link to="/news" tag="button">查看更多</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Main",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 5000,
        speed: 1000
      }
    };
  },
  props: {
    newList: Array,
    productList: Array,
    projectList: Array
  },
  methods: {
    lessContent(value) {
      const content = value.substring(0, 25);
      return content + "...";
    },
    goNews(id) {
      this.$router.push("/news/detail?id=" + id);
    },
    goProduct(id) {
      this.$router.push("/product/detail?id=" + id);
    },
    goProject(id) {
      this.$router.push("/engineering/detail?id=" + id);
    }
  }
};
</script>
<style lang="stylus" scoped>
.title
  font-size 18px
  margin-top .4rem
  color #00a2e9
.en
  font-size 14px
  color #c3c3c3
  margin .2rem 0 .4rem 0
.container
  text-align center
  .line 
    width 100%
    height .2rem
    background #f6f6f6
  .about
    .text 
      padding .4rem
      border-top 1px solid #ccc
      p
        text-indent 2em
        color #c3c3c3
        font-size 14px
        line-height 18px
        text-align left 
      button 
        width 1.2rem
        height .5rem
        background #ffffff
        color #00a2e9
        border 1px solid #00a2e9
        margin-top .4rem
        border-radius 3px
        font-size 10px
  .service
    background #eee
    overflow hidden
    .content
      border-top 1px solid #c3c3c3
      padding .4rem
      display flex
      flex-wrap wrap
      .item
        width 33.3%
        box-sizing border-box
        border-top 1px solid #c3c3c3
        border-left 1px solid #c3c3c3
        background #fff
        display flex
        flex-direction column
        align-items center
        &:nth-child(3n)
          border-right 1px solid #ccc
        &:nth-child(n+3)
          border-bottom 1px solid #ccc  
        p
          margin .2rem 0
        img 
          margin .2rem
  .video
    .content
      border-top 1px solid #c3c3c3
      padding .4rem
      .by_video
        width 100%
        height 3.2rem
  .anli
    .content
      border-top 1px solid #c3c3c3
      padding .4rem
      .item
        display flex
        margin-bottom .4rem
        align-items center
        &:nth-child(2n)
          flex-direction row-reverse
          img 
             transform rotate(180deg)
        img 
          width 3.48rem
          height 1.8rem
          background url('../../../assets/images/anliBgc.png') no-repeat center   
          border none    
        p
          flex 1
          font-size 8px
          color #c3c3c3
          line-height 14px
      button 
        width 2rem
        border-radius 10px
        background #fff
        border 1px solid #00a2e9
        color #00a2e9
  .news
    .content  
      border-top 1px solid #c3c3c3
      padding .4rem
      .news_item
        display flex
        align-items center
        padding .2rem
        border-bottom 1px solid #ccc
        img 
          width 3.3rem
          height 1.6rem
          margin-right .2rem
        .news_text
          flex 1
          text-align left 
          h4 
            font-size 10px
            font-weight 600
          div
            margin-top .2rem
            line-height 12px
            font-size 8px
            color #c3c3c3
       button 
        margin-top .4rem
        width 2rem
        border-radius 10px
        background #fff
        border 1px solid #00a2e9
        color #00a2e9
  .product
    .content  
      border-top 1px solid #c3c3c3
      padding .6rem 0
      .wrapper
        overflow:hidden
        width 100%
        .swiper-item
          width:100%
          .swiper_list
            margin 0 auto
            width 3.72rem
            height 4.8rem
            padding 0 .2rem
            border 1px solid #ccc
            display flex
            flex-direction column
            align-items center
            box-shadow 0 0  10px #bbb
            img 
              margin-top .2rem
              width 1.92rem
              height 1.8rem
            h3 
              margin-top .2rem
              font-size 12px
            p
              font-size 8px
              line-height 12px
              margin .2rem 0 .4rem 0
              color #c3c3c3
      button 
        margin-top .4rem
        width 2rem
        border-radius 10px
        background #fff
        border 1px solid #00a2e9
        color #00a2e9
</style>
