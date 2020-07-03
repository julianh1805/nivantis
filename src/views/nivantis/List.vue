<template>
  <div class="list">
    <h1 class="espace mb-4">Espace Nivantis</h1>
    <b-list-group class="mb-3">
      <h2 class="my-3">Numéro de commandes : {{commandes.length}}</h2>
      <b-list-group-item
        v-for="(commande, index) in commandes"
        :key="commande"
        v-on:click="details(index)"
        class="d-flex justify-content-between align-items-center"
      >
        <p>Demandeur : {{ commande.demandeur }}</p>
        <p>Produits : {{commande.medicaments.length}}</p>
        <p>Le {{commande.date}}</p>
      </b-list-group-item>
    </b-list-group>
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
    details(index) {
      localStorage.setItem("commandeId", index);
      router.push({ path: "details" });
    }
  }
};
</script>
<style scoped>
.list {
  text-align: left;
  padding: 1rem 1rem;
}

.espace {
  font-size: 18px;
  color: #004660;
}

p {
  margin-bottom: 0px !important;
  color: #495057;
}
h2,
.list-group-item {
  width: 60%;
  margin: auto;
}
h2 {
  font-size: 22px;
}
</style>
