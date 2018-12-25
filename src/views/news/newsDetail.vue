<template>
  <div>
    <news-deatail :itemList="itemList" :recList="recList" :typeList="typeList" @goReco="goReco" :link="link"></news-deatail>
  </div>
</template>
<script>
import NewsDeatail from "../../components/newsDetail";
export default {
  components: {
    NewsDeatail
  },
  data() {
    return {
      itemList: {},
      recList: [],
      id: "",
      typeList: [],
      link: "/news"
    };
  },
  methods: {
    async getNewsDetail(id) {
      const res = await this.$http.get("/by/user/news/getNewById", {
        params: { id: id }
      });
      if (res.data.code === 0) {
        this.itemList = res.data.object.new;
        this.recList = res.data.object.list;
      }
    },
    async getNewsType() {
      const res = await this.$http.get("/by/user/news/getNewsTypeList");
      if (res.data.code === 0) {
        this.typeList = res.data.object.list;
      }
    },
    goReco(id) {
      this.$router.push("/news/detail?id=" + id);
      this.getNewsDetail(id);
    }
  },
  created() {
    this.id = this.$route.query.id;
    this.getNewsDetail(this.id);
    this.getNewsType();
  }
};
</script>
<style lang="stylus" scoped>

</style>
