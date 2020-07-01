<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/">Medicaments</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- <b-navbar-nav>
            <b-nav-item href="#">Medicaments</b-nav-item>
          </b-navbar-nav>-->
        </b-collapse>
      </b-navbar>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    --->
    <router-view />
  </div>
</template>

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

button.principal {
  color: white;
  background-color: #004660;
  border-color: #004660;
  transition-duration: 0.4s;
}
button.principal:hover {
  background-color: #013142;
  border-color: #004660;
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
