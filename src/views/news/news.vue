<template>
  <div class="container">
    <news-cate :typeList="typeList" :index="index" @getList="getList"></news-cate>
    <div class="bottom">
      <div class="list" v-for="item in itemList" :key="item.id" @click="goDetail(item.id)">
        <h3>{{item.title}}</h3>
        <div v-html="lessContent(item.content)" class="detail_content">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NewsCate from '../../components/newsCate'
export default {
  components: {
    NewsCate
  },
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
        const id =  this.$route.query.id  || res.data.object.list[0].id;
        this.$router.push('/news?id='+id)
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
      this.$router.push('/news?id='+id)
      this.getItemList(id);
      this.index = id;
    },
    goDetail(id){
      this.$router.push('/news/detail?id='+id)
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
.container
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
