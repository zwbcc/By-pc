<template>
  <div class="container">
    <div class="top">
      <div :class="['item',{active:item.id == index}]" v-for="item in typeList" :key="item.id" @click="getList(item.id)">{{ item.name }}</div>
    </div>
    <div class="bottom">
      <router-link :to="'/news/detail?id='+item.id" class="list" tag="div" v-for="item in itemList" :key="item.id">
        <h3>{{item.title}}</h3>
        <div v-html="lessContent(item.content)" class="detail_content">
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      typeList: [],
      index: "",
      itemList: []
    };
  },
  methods: {
    async getTypeList() {
      const res = await this.$http.get("/by/user/news/getNewsTypeList");
      if (res.data.code === 0) {
        const id = res.data.object.list[0].id;
        this.typeList = res.data.object.list;
        this.index = id;
        this.getItemList(id);
      }
    },
    async getItemList(id) {
      const res = await this.$http.get("/by/user/news/getNewsList", {
        params: { id: id }
      });
      if (res.data.code === 0) {
        this.itemList = res.data.object.news;
      }
    },
    getList(id) {
      this.getItemList(id);
      this.index = id;
    },
    // 过滤内容过长
    lessContent(value) {
      let content = value.substring(0, 30);
      return content + "...";
    }
  },
  created() {
    this.getTypeList();
  }
};
</script>
<style lang="stylus" scoped>
.active 
  background #00a2e9
  color #fff
.container
  .top 
    padding .2rem .3rem
    display flex
    justify-content space-between
    border-bottom 10px solid #eee
    .item
      text-align center
      line-height .6rem
      font-size 12px
      width 1.2rem
      height .6rem
      border 1px solid #00a2e9
  .bottom
    padding .2rem .3rem
    .list 
      padding .2rem
      text-align center
      box-shadow 0 0 6px #aaa
      margin-bottom .4rem
      h3
        font-size 14px
        margin-bottom .2rem
      .detail_content 
        font-size 8px
        text-align left
</style>
