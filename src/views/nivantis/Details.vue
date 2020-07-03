<template>
  <div class="details">
    <h1 class="espace href" v-on:click="navigate()">Espace Nivantis</h1>
    <h1 class="espace">> Détail d'une commande</h1>
    <div class="commandes">
      <h2 class="my-3">Détails de la commande</h2>
      <p>Commande de {{commandes[7].demandeur}} :</p>
      <ul>
        <p class="my-3 blue">Liste des produits :</p>
        <li
          v-for="medicament in commandes[7].medicaments"
          v-bind:key="medicament"
        >- {{ medicament.nom }}</li>
      </ul>
      <p>Commande passée le {{commandes[7].date}}</p>
    </div>
  </div>
</template>

<script>
import { db } from "../../db.js";
import router from "../../router/index";

export default {
  data() {
    return {
      commandes: []
    };
  },
  firebase: {
    commandes: db.database().ref("commandes")
  },
  methods: {
    navigate() {
      router.go(-1);
    }
  }
};
</script>
<style scoped>
.details {
  text-align: left;
  padding: 1rem 1rem;
}

.espace {
  display: inline;
  font-size: 18px;
  color: #004660;
}
.href:hover {
  cursor: pointer;
}

p {
  margin-bottom: 0px !important;
  color: #495057;
}
.list-group-item {
  width: 60%;
  margin: auto;
}
.commandes {
  width: 60%;
  margin: auto;
}
li {
  list-style: none;
  color: #495057;
}
.blue {
  color: #004660;
}
h2 {
  font-size: 22px;
}
</style>
