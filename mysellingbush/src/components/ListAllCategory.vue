<template>
  <div>
    <table>
      <ListCategory v-bind:myJson="myJson"></ListCategory>
    </table>
  </div>
</template>

<script>
import ListCategory from "./ListCategory";

export default {
  name: "ListAllCategory",
  components: {
    ListCategory,
  },
  props: ['myJson'],
  computed: {

  }
};
</script>
