<template>
<div>
    <Category></Category>
    <Main :newList="newList" :productList="productList" :projectList="projectList"></Main>
</div>    
</template>
<script>
import Category from "./components/category";
import Main from "./components/main";
export default {
  components: {
    Category,
    Main
  },
  data() {
    return {
      newList: [],
      productList: [],
      projectList: []
    };
  },
  methods: {
    async getIndex() {
      const res = await this.$http.get("/by/index");
      if (res.data.code === 0) {
        const data = res.data.object;
        this.newList = data.news.splice(0, 3);
        this.productList = data.produces.splice(0, 4);
        this.projectList = data.projects.splice(0, 4);
      }
    }
  },
  created() {
    this.getIndex();
  }
};
</script>
<style lang="stylus" scoped>

</style>
