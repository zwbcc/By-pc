<template>
  <div>
    <Product :typeList="typeList" :itemList="itemList" @getItemList="getItemList" @goDetail="goDetail" :index="index"></Product>
  </div>
</template>
<script>
import Product from "../../components/product";
export default {
  components: {
    Product
  },
  data() {
    return {
      typeList:[],
      itemList: [],
      index: '0'
    }
  },
  methods: {
    async getTypeList() {
      const res = await this.$http.get("/by/user/markets/getMarketsTypeList");
      if (res.data.code === 0) {
        const id = res.data.object.list[0].id;
        this.typeList = res.data.object.list;
        this.index = id;
        this.getItemList(id);
      }
    },
    async getItemList(id) {
      this.index = id
      const res = await this.$http.get("/by/user/markets/getMarketsList", {
        params: { id: id }
      });
      if (res.data.code === 0) {
        this.itemList = res.data.object.produces
      }
    },
    goDetail(id){
      this.$router.push('/market/detail?id='+id)
    }
  },
  created() {
    this.getTypeList();
  }
};
</script>
<style lang="stylus" scoped>

</style>
