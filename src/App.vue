<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/">Medicaments</b-navbar-brand>
        <b-navbar-toggle @click.stop="drawer = true" target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav></b-collapse>
      </b-navbar>
      <v-navigation-drawer absolute permanent right v-show="drawer===true">
        <template v-slot:prepend>
          <v-list-item two-line>
            <v-list-item-avatar>
              <v-icon large color="green darken-2" @click="drawer=false">mdi-close-box</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>
                <h1>Nivantis</h1>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list dense>
          <v-flex>
            <v-flex>
              <v-btn
                depressed
                small
                class="btn btn-accent mt-5 pt-2"
                to="/login/nivantis"
              >Espace Nivantis</v-btn>
            </v-flex>
            <v-flex>
              <v-btn depressed small class="btn btn-accent mt-5 pt-2" to="/login/dmo">Espace DMO</v-btn>
            </v-flex>
            <v-flex>
              <v-btn depressed small class="btn btn-accent mt-5 pt-2" to="/dmo/home">Espace DMO</v-btn>
            </v-flex>
          </v-flex>
        </v-list>
      </v-navigation-drawer>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    --->
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
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
</style>
