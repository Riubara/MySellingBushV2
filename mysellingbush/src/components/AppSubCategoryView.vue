<template>
  <div id="appSubCategory">
    <div>
      <div style="align-items: center">
        <h2>Choose a sub-category</h2>
      </div>

      <div>
        <ListAllSubCategory v-bind:myJson="subcategories"></ListAllSubCategory>
      </div>
    </div>
    <div>
      <ProductCase
        v-for="prod in products"
        :key="prod.ID"
        v-bind:name="prod.Product_Name"
        v-bind:ID="prod.ID"
      ></ProductCase>
    </div>
  </div>
</template>

<script>
import ListAllSubCategory from "./ListAllSubCategory";
import SubCategoryService from "../services/SubCategoryService";
import ProductService from "../services/ProduitService";
import ProductCase from "./ProductCase";

export default {
  name: "App",
  components: {
    ListAllSubCategory,
    ProductCase,
  },
  data() {
    return {
      subcategories: [],
      products: [],
    };
  },
  async mounted() {
    SubCategoryService.getById(this.$route.params.id)
      .then((res) => {
        if (res) {
          this.subcategories = res;
        }
      })
      .catch((err) => console.log(err));
    ProductService.getByIdCat(this.$route.params.id)
      .then((res) => {
        if (res) {
          this.products = res;
        }
      })
      .catch((err) => console.log(err));
      console.log(this.products)
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-top: 60px;
}

body {
  background-color: #c3b8aa;
}

.navbarTop {
  background-color: #859276;
}
</style>
