<template>
  <div class="home" v-if="!$store.getters.isLogged">
    <h2 class="mt-4 mb-3">Connexion</h2>
    <v-flex>
      <v-btn class="btn principal mr-2 pt-2" v-on:click="navigate('login')">Espace Nivantis</v-btn>
      <v-btn class="btn principal mr-2 pt-2" v-on:click="navigate('login')">Espace DMO</v-btn>
    </v-flex>
    <!--   <router-link to="/login/nivantis" class="btn btn-primary" tag="button">Espace Nivantis</router-link>
    <router-link to="/login/dmo" class="btn btn-primary" tag="button">Espace DMO</router-link>
    <router-link to="/dmo/home" class="btn btn-primary" tag="button">foo</router-link>-->
  </div>
  <div class="home" v-else>
  <h1> SALUT</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import router from "../router/index";

export default {
  name: "Home",
    methods: {
    navigate(link) {
      router.push({ path: link });
    }
  }
};
</script>
