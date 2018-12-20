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
      const res = await this.$http.get(
        "/by/user/engineers/getEngineersTypeList"
      );
      if (res.data.code === 0) {
        const id = res.data.object.list[0].id;
        this.typeList = res.data.object.list;
        this.index = id;
        this.getItemList(id);
      }
    },
    async getItemList(id) {
      this.index = id;
      const res = await this.$http.get("/by/user/engineers/getEngineersList", {
        params: { id: id }
      });
      if (res.data.code === 0) {
        this.itemList = res.data.object.engineersList;
      }
    },
    goDetail(id) {
      this.$router.push("/engineering/detail?id=" + id);
    }
  },
  created() {
    this.getTypeList();
  }
};
</script>
<style lang="stylus" scoped>

</style>
