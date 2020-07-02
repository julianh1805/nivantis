<template>
  <div class="home" v-if="!$store.getters.isLogged">
    <h2 class="mt-4 mb-3">Connexion</h2>
    <v-flex>
      <v-btn class="btn principal mr-2 pt-2" v-on:click="navigate('login')">Espace Nivantis</v-btn>
      <v-btn class="btn principal mr-2 pt-2" v-on:click="navigate('login')">Espace DMO</v-btn>
    </v-flex>
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
