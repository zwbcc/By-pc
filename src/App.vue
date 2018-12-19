<template>
    <div>
        <Header></Header>
        <Swipers :swipers="swipers"></Swipers>
        <router-view></router-view>
        <Footer ></Footer>
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
    }
  },
  created() {
    this.getSwiper();
  }
};
</script>
<style lang="stylus" scoped>


</style>
