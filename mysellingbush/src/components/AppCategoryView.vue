<template>
  <div id="appCategory">
    <div>
      <div style="align-items: center">
        <h2>Choose a category</h2>
      </div>

      <div>
        <ListAllCategory v-bind:myJson="categories"></ListAllCategory>
      </div>
    </div>
  </div>
</template>

<script>
import ListAllCategory from "./ListAllCategory";
import CategoryService from "@/services/CategoryService";

export default {
  name: "App",
  components: {
    ListAllCategory,
  },
  data() {
    return {
      categories: [],
    };
  },
  async mounted() {
    CategoryService.getAll()
      .then((res) => {
        if (res) {
          this.categories = res;
        }
      })
      .catch((err) => console.log(err));
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
