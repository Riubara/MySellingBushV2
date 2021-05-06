<template>
  <div id="appLogin">
    <form class="form">
      <input type="text" />
      <input type="password" />
    </form>

    <form class="form">
      <p>login</p>
      <input type="text" v-model="user" />
      <p>password</p>
      <input type="password" v-model="pass" />
      <p>password</p>
      <input type="password" v-model="pass2" />
      <br />
      <input type="submit" value="Valider" @submit.prevent @click="submit()"/>
    </form>
  </div>
</template>

<script>
import LoginService from "../services/LoginService";

export default {
  data() {
    return { user: "", pass: "" };
  },
  methods: {
    submit() {
      LoginService.postAll(this.user, this.pass)
        .then((res) => {
          console.log(this.user)
          if (res) {
            this.categories = res;
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.form {
  margin-top: 5%;
  margin-left: 10%;
  text-align: left;
  display: flex;
  flex-direction: column;
  width: 30%;
}
</style>
