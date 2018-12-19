<template>
    <div class="wrapper">
        <swiper :options="swiperOption" class="swiper-container" >
        <swiper-slide class="swiper-item" v-for="item of swipers" :key="item.id">
            <img class="swiper-img" :src="item.name" :alt="item.title" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "Swipers",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 2000,
        speed: 1000
      }
    };
  },
  props: {
    swipers: Array
  }
};
</script>
<style lang='stylus' scoped>
// >>>穿透作用，因为swiper-pagination-bullet-active类在组件内部定义的，想要wrapper也能作用到，可以用>>>
.wrapper >>>.swiper-pagination-bullet-active
  background #fff !important
.wrapper
  overflow:hidden
  width 100%
  height:0
  padding-bottom: 36.333%
  background :#ccc
  .swiper-item
    width:100%
    .swiper-img
      width:100%
</style>
