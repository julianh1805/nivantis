<template>
  <div class="calcul">
    <h1 class="espace href" v-on:click="navigate()">Espace DMO</h1>
    <h1 class="espace">> Calcul des achats de la pharmacie</h1>
    <b-form class="mt-4">
      <b-form-group id="medicament" label="Sélectionnez un médicament" label-for="medicament">
        <select class="form-control" id="select" @change="onChange($event)">
          <option selected disabled value>Choisir un produit</option>
          <option
            v-for="medicament in medicaments"
            v-bind:value="medicament.id"
            :key="medicament.id"
          >{{medicament.nom}}</option>
        </select>
      </b-form-group>
      <div class="info">
        <ul v-if="medicament.nom">
          <p class="mb-1">Informations sur le produit :</p>
          <li>- Nom : {{medicament.nom}}</li>
          <li>- Prix : {{medicament.prix}}€</li>
          <li>- Remise : {{medicament.remise}}%</li>
        </ul>
      </div>
      <div class="prices">
        <ul v-if="medicament.nom">
          <p class="mb-1">Calculs commerciaux du produit :</p>
          <li>
            <b>- Taux de remise :</b>
            {{tauxRemise.toFixed(2)}}
          </li>
          <li>
            <b>- Prix d’achat net :</b>
            {{prixAchatNet.toFixed(2)}}
          </li>
          <li>
            <b>- Prix de vente net :</b>
            {{prixVenteNet.toFixed(2)}}
          </li>
          <li>
            <b>- Coefficient multiplicateur :</b>
            {{multi.toFixed(2)}}
          </li>
        </ul>
      </div>
    </b-form>
  </div>
</template>

<script>
import router from "../../router/index";

export default {
  data() {
    return {
      medicaments: [
        { id: 101, nom: "Produit 1", prix: 77, remise: 10 },
        { id: 135, nom: "Produit 2", prix: 3.99 },
        { id: 124, nom: "Produit 3", prix: 2.57 }
      ],
      medicament: {},
      prix: 0,
      tauxRemise: 0,
      prixAchatNet: 0,
      prixVenteNet: 0,
      multi: 0
    };
  },
  methods: {
    navigate() {
      router.go(-1);
    },
    onChange(event) {
      let medicamentId = event.target.value;
      this.medicament = this.medicaments.find(
        medicament => medicament.id === +medicamentId
      );
      this.calculs(this.medicament);
    },
    calculs(medicament) {
      console.log(medicament);
      this.prixAchatNet = medicament.prix * (1 - medicament.remise / 100);
      this.tauxRemise = (1 - this.prixAchatNet / medicament.prix) * 100;
    }
  }
};
</script> 
<style scoped>
.calcul {
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
.prix p {
  display: inline;
}
.grey {
  color: #495057;
}
ul {
  padding-inline-start: 0px !important;
}
li {
  list-style: none;
  color: #495057;
}
.info,
.prices {
  margin-top: 35px;
}
</style>

