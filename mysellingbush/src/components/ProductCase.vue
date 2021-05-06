<template>
  <div class="product">
      <h4>{{name}}</h4>
      <button>buy</button>
  </div>
</template>

<script>
export default {
  name: "ListCategory",
  props: ["name"],
};
</script>

<style>
.product {
  border: solid;
  border-color: black;
  margin-top: 10px;

}
</style>