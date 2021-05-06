<template>
  <div>
    <td v-for="json in myJson" :key="json.id">
      <button @click="$router.push('/subcategory/' + json.ID)">
        {{ json.CategoryTitle }}
      </button>
    </td>
  </div>
</template>
<script>
export default {
  props: ["myJson"],
  created() {
    console.log(this.myJson);
  },
};
</script>
