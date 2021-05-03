<template>
  <div id="app">
    <div class="navbarTop">
      <h1 chass="test">MySellingBush</h1>
      <button>panier</button>
      <button>profil</button>
    </div>

    <div>
      <div style="align-items: center">
        <h2>Choose a sub-category</h2>
      </div>

      <div>
        <ListAllSubCategory></ListAllSubCategory>
      </div>
    </div>
  </div>
</template>

<script>
import ListAllSubCategory from './components/ListAllSubCategory';

export default {
  name: "App",
  components: {
    ListAllSubCategory
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
  background-color: #C3B8AA;
}

.navbarTop {
    background-color: #859276;

}


</style>
