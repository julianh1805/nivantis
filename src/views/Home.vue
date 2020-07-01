<template>
  <div class="home">
    <p>Connexion</p>
    <router-link to="/login/nivantis" class="btn btn-primary" tag="button">Espace Nivantis</router-link>
    <router-link to="/login/dmo" class="btn btn-primary" tag="button">Espace DMO</router-link>
    <router-link to="/dmo/home" class="btn btn-primary" tag="button">foo</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home"
};
</script>
