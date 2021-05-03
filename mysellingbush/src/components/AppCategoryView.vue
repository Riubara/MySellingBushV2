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
        <ListAllCategory></ListAllCategory>
      </div>
    </div>
  </div>
</template>

<script>
import ListAllCategory from './components/ListAllCategory';

export default {
  name: "App",
  components: {
    ListAllCategory
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
