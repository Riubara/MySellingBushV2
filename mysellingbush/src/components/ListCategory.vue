<template>
  <div>
    <td v-for="json in myJson" :key="json.id"><button>{{json.categoryTitle}}</button></td>
  </div>
</template>
<script>

export default {
  props: ['myJson'],
  created () {
    console.log(this.myJson);
  }
}
</script>
