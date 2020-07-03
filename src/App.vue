<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <router-link to="/">Nivantis</router-link>
        <b-button variant="danger" v-if="$store.getters.isLogged" @click.prevent="signOut">
          Se déconnecter
        </b-button>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>
<script>
import { db } from "./db.js";
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    signOut() {
      db.auth()
        .signOut()
        .then(() => {
          this.$store.dispatch("logOut");
          this.$router.push("/");
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #004660;
  background-color: white;
}

#app .router-link-active {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  color: white;
  transition: 0.4s;
}
#app .router-link-active:hover {
  text-decoration: none;
  color: rgb(241, 241, 241);
}

.navbar-expand-lg {
  flex-flow: row nowrap;
  justify-content: space-between !important;
}

nav {
  background: rgb(17, 219, 0);
  background: linear-gradient(
    90deg,
    rgba(20, 233, 1, 0.856) 35%,
    rgb(1, 122, 11) 100%
  );
}
form {
  width: 60%;
  margin: auto;
}
form label {
  color: #004660;
}

div.center {
  display: flex;
  justify-content: center;
}

button.principal,
a.principal {
  color: white !important;
  background-color: #004660 !important;
  border-color: #004660 !important;
  transition-duration: 0.4s;
}
button.principal:hover,
a.principal:hover {
  color: white !important;
  background-color: #013142 !important;
  border-color: #013142 !important;
}

button.secondary {
  color: #495057;
  background-color: #e6e6e6;
  border-color: #e6e6e6;
  transition-duration: 0.4s;
}
button.secondary:hover {
  color: #495057;
  background-color: #c4c4c4;
  border-color: #c4c4c4;
}
.navbar-expand-lg {
  justify-content: space-between !important;
}
</style>
