<template>
  <div>
    <Product :typeList="typeList" :itemList="itemList" @getItemList="getItemList" ></Product>
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
      itemList: []
    }
  },
  methods: {
    async getTypeList() {
      const res = await this.$http.get("/by/user/produces/getProducesTypeList");
      if (res.data.code === 0) {
        const id = res.data.object.list[0].id;
        this.typeList = res.data.object.list;
        this.index = id;
        this.getItemList(id);
      }
    },
    async getItemList(id) {
      const res = await this.$http.get("/by/user/produces/getProducesList", {
        params: { id: id }
      });
      if (res.data.code === 0) {
        this.itemList = res.data.object.produces
      }
    },
  },
  created() {
    this.getTypeList();
  }
};
</script>
<style lang="stylus" scoped>

</style>
