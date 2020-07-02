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
        </ul>
      </div>
      <div class="prices">
        <ul v-if="medicament.nom">
          <p class="mb-1">Prix du médicament :</p>
          <li>
            <b>- Taux de remise : </b><!-- (1 - Prix de d’achat net / Prix d’achat brut) x 100 -->
            <span>{{medicament.tauxRemise * 100}} %</span>
          </li>
          <li>
            <b>- Prix d’achat net : </b><!-- Prix d’achat brut x (1 – taux de remise) -->
            <span>{{this.prixAchatNet}} €</span>
          </li>
          <li>
            <b>- Prix de vente net : </b><!-- prix d’achat net x coefficient multiplicateur -->
            <span>{{this.prixVenteNet}} €</span>
          </li>
          <li>
            <b>- Coefficient multiplicateur : </b><!-- Prix de vente net / Prix d’achat net -->
            <span>{{this.coefficientMultiplicateur}}</span>
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
        { id: 101, nom: "Produit 1", prix: 4, tauxRemise: 0.025},
        { id: 135, nom: "Produit 2", prix: 3.99, tauxRemise : 0.02 },
        { id: 124, nom: "Produit 3", prix: 2.57, tauxRemise : 0.01 }
      ],
      medicament: {},
      prix: 0,
      prixAchatNet:0,
      prixVenteNet:0,
      coefficientMultiplicateur:1.2,
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
      this.prixAchatNet=Math.round(this.calculPrixAchatNet()*100)/100
      this.prixVenteNet=Math.round(this.calculPrixVenteNet()*100)/100
      //this.coefficientMultiplicateur=this.calculCoefficientMultiplicateur()
    },
    calculPrixAchatNet(){
      let calcul=this.medicament.prix * (1-this.medicament.tauxRemise)
      return calcul
    },
    calculPrixVenteNet(){
      let calcul=this.calculPrixAchatNet()*this.coefficientMultiplicateur
      return calcul
    },
    /*calculCoefficientMultiplicateur(){
      let calcul= this.prixVenteNet/this.prixAchatNet
      return calcul
    }*/
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

