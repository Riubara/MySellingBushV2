<template>
  <div>
    <table>
      <ListSubCategory></ListSubCategory>
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
  
};
</script>
