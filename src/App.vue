<template>
    <div>
        <Header></Header>
        <Swipers :swipers="swipers"></Swipers>
        <router-view class="main"></router-view>
        <Footer class="footer"></Footer>
    </div>
</template>
<script>
import Header from "./components/header";
import Swipers from "./components/swiper";
import Footer from "./components/footer";
export default {
  components: {
    Header,
    Swipers,
    Footer
  },
  data() {
    return {
      swipers: []
    };
  },
  methods: {
    async getSwiper() {
      const res = await this.$http.get("/by/index");
      if (res.data.code === 0) {
        this.swipers = res.data.object.rotationCharts;
      }
    },
　　_isMobile() {
      const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
  },
  created() {
    this.getSwiper();
  },
   mounted() {
    if (!this._isMobile()) {
      //  window.location.href = "http://www.baidu.com"
    }
  }
};
</script>
<style lang="stylus">
.main 
  padding-bottom 3.52rem
.footer 
  position fixed
  bottom 0
  left 0
  z-index 10000


</style>
