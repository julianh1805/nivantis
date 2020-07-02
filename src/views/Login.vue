<template>
  <div class="login">
    <form class="form" v-if="$route.params.espace==='dmo'">
      <h2 class="mt-4 mb-3">Connexion DMO</h2>
      <b-form-group id="email" label label-for="email">
        <b-form-input id="email" v-model="email" type="email" required placeholder="Email"></b-form-input>
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
      <button class="btn principal mt-2" @click.prevent="loginDmo">Se connecter</button>
      <!--<div class="errors" v-bind:if="hasErrors">
            <p v:bind-for="error in errors">{{ error }}</p>
      </div>-->
    </form>
    <form v-else>
      <h2 class="mt-4 mb-3">Connexion Nivantis</h2>
      <b-form-group id="email" label label-for="email">
        <b-form-input id="email" v-model="email" type="email" required placeholder="Email"></b-form-input>
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
      <button class="btn principal mt-2" @click.prevent="loginNivantis">Se connecter</button>
        <div class="errors" v:bind-if="hasErrors">
            <p v:bind-for="error in errors">{{ error }}</p>
        </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  date() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  computed: {
    hasErrors() {
      return this.errors.length > 0;
    }
  },
  methods: {
    loginNivantis() {
      console.log("login");
      this.errors = [];
      if (this.isFormValid()) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
            this.$store.dispatch("setUser", user);
            this.$router.push("/dmo/Home");
          })
          .catch(error => {
            this.errors.push(error.message);
          });
      }
    },
    loginDmo() {
      console.log("login");
      this.errors = [];
      if (this.isFormValid()) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
            this.$store.dispatch("setUser", user);
            this.$router.push("/dmo/Home");
          })
          .catch(error => {
            this.errors.push(error.message);
          });
      }
    },
    isFormValid() {
      if (this.email.length > 0 && this.password.length > 0) {
        return true;
      }

      return false;
    }
  }
};
</script>
<style scoped>
form {
  width: 30% !important;
}
</style>