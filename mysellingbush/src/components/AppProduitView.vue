<template>
    <div id="appProduit">
        <h2> {{product.Product_Name}} </h2>
    </div>
    
</template>
<script>
import ProductService from "../services/ProduitService";

export default {
  name: "App",
  
  data() {
    return {
      product: [],
    };
  },
  async mounted() {
    ProductService.getById(this.$route.params.id)
      .then((res) => {
        if (res) {
          this.products = res;
        }
      })
      .catch((err) => console.log(err));
      console.log(this.product.Product_Name)
  },
};


</script>