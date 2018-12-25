<template>
  <div>
    <two-news :typeList="typeList" :itemList="itemList" :index="index" @getItemList="getItemList" @goDetail="goDetail"></two-news>
  </div>
</template>
<script>
import TwoNews from "../../components/twoNews";
export default {
  components: {
    TwoNews
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
      const res = await this.$http.get("/by/user/projects/getProjectsTypeList");
      if (res.data.code === 0) {
        const id = this.$route.query.id || res.data.object.list[0].id;
        this.$router.push("/construct?id=" + id);
        this.typeList = res.data.object.list;
        this.index = id;
        this.getItemList(id);
      }
    },
    async getItemList(id) {
      this.index = id;
      this.$router.push("/construct?id=" + id);
      const res = await this.$http.get("/by/user/projects/getProjectsList", {
        params: { id: id }
      });
      if (res.data.code === 0) {
        this.itemList = res.data.object.projectsList;
      }
    },
    goDetail(id) {
      this.$router.push("/construct/detail?id=" + id);
    }
  },
  created() {
    this.getTypeList();
  }
};
</script>
<style lang="stylus" scoped>

</style>
