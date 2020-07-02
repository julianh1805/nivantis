<template>
  <div class="register">
    <h2 class="mt-4 mb-3">Inscription DMO</h2>
    <form>
      <b-form-group id="email" label label-for="email">
        <b-form-input
          id="email"
          v-model.trim="email"
          type="email"
          required
          placeholder="Email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="password" label label-for="password">
        <b-form-input
          id="password"
          v-model="password"
          type="password"
          required
          placeholder="Mot de passe"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="password_verification" label label-for="password_verification">
        <b-form-input
          id="password_confirmation"
          v-model="password_confirmation"
          type="password"
          name="password_confirmation"
          required
          placeholder="Confirmation du mot de passe"
        ></b-form-input>
      </b-form-group>
      <button class="btn principal" @click.prevent="register">
        S'inscrire
      </button>
      <!--<div class="errors" v-bind:if="hasErrors">
            <p v:bind-for="error in errors">{{ error }}</p>
      </div>-->
    </form>
    <b-alert variant="error" :show="showAlert" dismissible>{{
      this.errorMessage
    }}</b-alert>
  </div>
</template>

<script>
import { db } from "../db.js";
//import md5 from 'md5'

export default {
  name: "RegisterDmo",
  data() {
    return {
      showAlert: false,
      email: "",
      password: "",
      password_confirmation: "",
      errorMessage: "",
    };
  },
  methods: {
    register() {
      this.showAlert = false;
      if (this.password === this.password_confirmation) {
        db.auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            user.role = "dmo";
            this.$store.dispatch("setUser", user);
            this.$router.push("/login/dmo");
          })
          .catch((error) => {
            this.errorMessage = error.message;
            this.showAlert = true;
          });
      } else {
        this.errorMessage = "Vérifié votre mot de passe";
        this.showAlert = true;
      }
    },
  },
};
</script>
<style scoped>
form {
  width: 30% !important;
}
</style>
