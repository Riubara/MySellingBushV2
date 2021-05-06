<template>
  <tr>
    <td v-for="json in myJson" :key="json.id">
      <button>{{ json.SubCategoryTitle }}</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "ListCategory",
  props: ["myJson"],
  created() {
    console.log(this.myJson)
  }
};
</script>