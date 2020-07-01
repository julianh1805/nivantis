<template>
  <div class="home">
    <h1 class="espace">Espace DMO</h1>
    <div class="menu">
      <div class="action" v-on:click="navigate('ajouter-des-données-sur-une-officine')">
        <b-icon-folder-plus class="icon"></b-icon-folder-plus>Ajouter des données sur une officine
      </div>
      <div class="action" v-on:click="navigate('calcul-des-achats-de-la-pharmacie')">
        <b-icon-list-ul class="icon"></b-icon-list-ul>Calcul des achats de la pharmacie
      </div>
      <div class="action" v-on:click="navigate('ajouter-des-données-sur-une-offficine')">
        <b-icon-cart-2 class="icon"></b-icon-cart-2>Vendre des médicaments
      </div>
    </div>
  </div>
</template>

<script>
import router from "../../router/index";

export default {
  name: "Home",
  methods: {
    navigate(link) {
      router.push({ path: link });
    }
  }
};
</script>

<style scoped>
.home {
  text-align: left;
  padding: 1rem 1rem;
}

.espace {
  font-size: 18px;
  color: #004660;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 89vh;
}

.action {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  border: 2px solid #004660;
  padding: 15px 0;
  margin-bottom: 30px;
  border-radius: 10px;
  color: #004660;
  transition-duration: 0.4s;
}
.action:hover {
  background-color: #004660;
  color: white;
  cursor: pointer;
}

.icon {
  font-size: 24px;
  margin-right: 8px;
}
</style>
