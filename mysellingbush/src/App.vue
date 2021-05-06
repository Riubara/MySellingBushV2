<template>
  <div id="app">
    <div class="navbarTop">
      <h1 chass="test">MySellingBush</h1>
      <button>panier</button>
      <button @click="$router.push('/login')">profil</button>
    </div>

    <div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
//import ListAllSubCategory from "./components/ListAllSubCategory";
//import SubCategoryService from "@/services/SubCategoryService";

export default {};
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
