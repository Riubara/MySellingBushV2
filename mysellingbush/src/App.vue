<template>
  <div id="app">
    <div class="navbarTop">
      <h1 chass="test">MySellingBush</h1>
      <button>panier</button>
      <button>profil</button>
    </div>

    <div>
      <div style="align-items: center">
        <h2>Choose a category</h2>
      </div>

      <div>
        <ListAllCategory v-bind:myJson="myJson"></ListAllCategory>
      </div>
      
    </div>
  </div>
</template>

<script>
import ListAllCategory from "./components/ListAllCategory";
import json from "../public/data";
import CategoryService from "./services/CategoryService"

export default {
  name: "App",
  components: {
    ListAllCategory,
  },
  data() {
    return {
      myJson: json,
    };
  },
  async mounted() {
    CategoryService.getAll()
    .them((res) => {
      if (res) {
        //this.categories = res.map((object));
      }
    })
    .catch((err) => console.log(err));
  }
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
