<template>
  <div class="home">
    <h1>Connexion</h1>
    <v-flex>
        <v-btn depressed small class="btn btn-primary mr-2 pt-2" to="/login/nivantis">Espace Nivantis</v-btn>
        <v-btn depressed small class="btn btn-primary mr-2 pt-2" to="/login/dmo">Espace DMO</v-btn>
        <v-btn depressed small class="btn btn-primary mr-2 pt-2" to="/dmo/home">Espace DMO</v-btn>
    </v-flex>
  <!--   <router-link to="/login/nivantis" class="btn btn-primary" tag="button">Espace Nivantis</router-link>
    <router-link to="/login/dmo" class="btn btn-primary" tag="button">Espace DMO</router-link>
    <router-link to="/dmo/home" class="btn btn-primary" tag="button">foo</router-link> -->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home"
};
</script>
