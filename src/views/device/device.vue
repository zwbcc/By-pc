<template>
  <div>
    <Product></Product>
  </div>
</template>
<script>
import Product from "../../components/product";
export default {
  components: {
    Product
  },
  methods: {
    async getList() {
      const { data: res } = await this.$http.get("/api/user");
      console.log(res);
    }
  },
  created() {
    this.getList();
  }
};
</script>
<style lang="stylus" scoped>

</style>
