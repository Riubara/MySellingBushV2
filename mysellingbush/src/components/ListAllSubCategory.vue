<template>
  <div>
    <table>
      <ListSubCategory v-bind:myJson="myJson"></ListSubCategory>
    </table>
  </div>
</template>

<script>
import ListSubCategory from "./ListSubCategory";

export default {
  name: "ListAllCategory",
  components: {
    ListSubCategory,
  },
  props: ["myJson"],
};
</script>
