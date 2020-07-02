<template>
  <div class="home" v-if="!$store.getters.isLogged">
    <h2 class="mt-4 mb-3">NIVANTIS</h2>
    <v-flex>
      <v-btn
        class="btn principal mr-2 pt-2"
        v-on:click="navigate('login/nivantis')"
        >Connexion Nivantis</v-btn
      >
      <v-btn class="btn principal mr-2 pt-2" v-on:click="navigate('login/dmo')"
        >Connexion DMO</v-btn
      >
      <v-btn
        class="btn principal mr-2 pt-2"
        v-on:click="navigate('register/dmo')"
        >Inscription DMO</v-btn
      >
    </v-flex>
  </div>
  <div class="home" v-else-if="$store.getters.getCurrentRole === 'dmo'">
    <h1>Panel DMO</h1>
    <v-flex>
      <v-btn class="btn principal mr-2 pt-2" to="/dmo/home">Espace DMO</v-btn>
    </v-flex>
  </div>
  <div class="home" v-else-if="$store.getters.getCurrentRole === 'nivantis'">
    <v-flex>
    <h1>Panel Nivantis</h1>
      <v-btn class="btn principal mr-2 pt-2" to="/nivantis/home">
        Espace Nivantis
      </v-btn>
    </v-flex>
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
    },
  },
};
</script>
