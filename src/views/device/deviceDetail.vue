<template>
  <div>
    <product-detail :detailList="detailList" :pics="pics"></product-detail>
  </div>
</template>
<script>
import ProductDetail from "../../components/productDetail";
export default {
  components: {
    ProductDetail,
  },
  data() {
      return {
        detailList: {},
        pics:[]
      }
  },
    methods: {
      async getDetail(id){
        const res = await this.$http.get('/by/user/equipments/getEquipmentsById',{params:{id:id}})
        if(res.data.code === 0) {
          this.detailList = res.data.object.produces
          this.pics = res.data.object.pictures
        }
      }
    },
    created() {
      const id = this.$route.query.id
      this.getDetail(id)
    },
};
</script>
<style lang="stylus" scoped>

</style>
