<template>
    <div class="container">
        <div class="header">
            <img src="../assets/images/arrow-left.png" alt="" class="back" @click="goBack()" v-if="this.$route.path == '/'?false:true">
            <h2>{{ title }}</h2>
            <img src="../assets/images/Bitmap.png" alt="" class="logo">
            <div class="select_name" v-if="this.$route.path == '/'?true:false">
              <select v-model="value">
                <option value="0" selected>中文</option>
                <option value="1">English</option>
              </select>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      value: "0"
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  props: {
    title: String
  },
  watch: {
    value: function(newData) {
      if (newData == 1) {
        this.$http
          .get("/by/changeType", { params: { lang: "en" } })
          .then(function(data) {
            console.log(data);
          });
      } else {
        this.$http.get("/by/changeType", { params: { lang: "ch" } }, function(
          data
        ) {
          console.log(data);
        });
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.header
  height .6rem   
  display flex
  position relative
  align-items center
  justify-content space-between
  padding 0 .2rem
  .logo 
    width 1.7rem
    height .48rem
  .back
    width .3rem
    height .3rem
  h2
    position absolute
    font-size 14px
    color black
    left 50%
    transform translateX(-50%)
</style>
