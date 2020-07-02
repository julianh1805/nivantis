<template>
  <div class="list">
    <h1 class="espace">Espace Nivantis</h1>
    <b-list-group class="mb-3">
      <b-list-group-item
        v-for="commande in commandes"
        :key="commande"
        class="d-flex justify-content-between align-items-center"
      >{{ commande }}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { db } from "../../db.js";

export default {
  data() {
    return {
      commandes: []
    };
  },
  firebase: {
    commandes: db.database().ref("commandes")
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
</style>
