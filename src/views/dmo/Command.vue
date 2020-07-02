<template>
  <div class="command">
    <h1 class="espace href" v-on:click="navigate()">Espace DMO</h1>
    <h1 class="espace"> > Commande de médicaments</h1>
    <div></div>
    <div class="add mt-4">
      <form v-if="!showAlert">
        <h2>Liste des médicaments à commander</h2>
        <p v-if="form.medicaments.length === 0">
          Vous n'avez pas choisi de médicaments à commander. Selectionnez des
          médicaments pour les ajouter à la liste.
        </p>
        <b-list-group class="mb-3">
          <b-list-group-item
            v-for="medicament in form.medicaments"
            :key="medicament.id"
            class="d-flex justify-content-between align-items-center"
          >
            {{ medicament.nom }}
            <div>
              <b-badge variant="primary" pill>{{
                medicament.quantite
              }}</b-badge>
              <b-badge
                variant="danger"
                class="ml-1"
                pill
                @mouseover="hover = 'Supprimer'"
                @mouseleave="hover = 'X'"
                v-on:click="unstage(medicament)"
                >{{ hover }}</b-badge
              >
            </div>
          </b-list-group-item>
        </b-list-group>
        <div class="row">
          <div class="col-10">
            <b-form-group
              id="medicament"
              label="Sélectionnez un médicament"
              label-for="medicament"
            >
              <select
                class="form-control"
                id="medicament"
                @change="onChangeProduct($event)"
                v-model="medicament.id"
              >
                <option selected disabled value>Choisir un produit</option>
                <option
                  v-for="medicament in medicaments"
                  v-bind:value="medicament.id"
                  :key="medicament.id"
                  >{{ medicament.nom }}</option
                >
              </select>
            </b-form-group>
          </div>
          <div class="col-2">
            <b-form-group id="quantite" label="Quantité" label-for="quantite">
              <select
                class="form-control"
                id="quantite"
                @change="onChangeQuantity($event)"
                v-model="medicament.quantite"
              >
                <option selected disabled value></option>
                <option
                  v-for="quantite in quantites"
                  v-bind:value="quantite"
                  :key="quantite"
                  >{{ quantite }}</option
                >
              </select>
            </b-form-group>
          </div>
          <div class="center">
            <b-button
              type="button"
              class="principal mr-1"
              v-on:click="ajouter()"
              :disabled="
                (medicament.nom === '' && medicament.quantite >= 1) ||
                  medicament.quantite === null
              "
              >Ajouter</b-button
            >
            <b-button
              type="button"
              class="secondary ml-1"
              v-on:click="navigate()"
              >Annuler</b-button
            >
          </div>
        </div>
        <div class="pharmacie mt-4">
          <b-form-group
            id="pharmacie"
            label="Selectionnez votre pharmacie:"
            label-for="pharmacie"
          >
            <b-form-select
              id="pharmacie"
              placeholder="Pharmacie"
              v-model="form.pharmacie"
              required
            >
              <b-form-select-option
                v-for="pharmacie in pharmacies"
                :key="pharmacie.id"
                :value="pharmacie.id"
                >{{ pharmacie.name }}</b-form-select-option
              >
            </b-form-select>
          </b-form-group>
        </div>
        <div class="center mt-4">
          <b-button
            type="button"
            class="principal mr-1"
            v-on:click="submit()"
            :disabled="form.medicaments.length === 0 || form.pharmacie === null"
            >Valider la commande</b-button
          >
        </div>
      </form>
      <div v-if="showAlert" class="success">
        <b-alert variant="success" :show="showAlert" dismissible
          >Commande effectuée</b-alert
        >
        <button class="btn principal" v-on:click="navigate()">Revenir à l'accueil</button>
      </div>
      <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card> -->
    </div>
  </div>
</template>

<script>
import router from "../../router/index";
import { db } from "../../db.js";

export default {
  data() {
    return {
      showAlert: false,
      form: {
        medicaments: [],
        pharmacie: null,
      },
      medicaments: [],
      medicamentsDeleted: [],
      medicament: {
        id: "",
        nom: "",
        quantite: null,
      },
      pharmacies: [],
      quantites: [],
      hover: "X",
    };
  },
  firebase: {
    medicaments: db.database().ref("medicaments"),
    pharmacies: db.database().ref("pharmacies"),
  },
  methods: {
      navigate() {
      router.go(-1);
    },
    submit() {
      if (db.database().ref("commandes").push(this.form)) {
        this.showAlert = true;
      }
    },
    onChangeProduct(event) {
      let medicamentId = event.target.value;
      let medicament = this.medicaments.find(
        (medicament) => medicament.id === +medicamentId
      );
      this.medicament.quantite = null;
      this.quantites = [];
      this.medicament.nom = medicament.nom;
      this.medicament.id = medicamentId;
      for (let i = 1; i <= medicament.quantite; i++) {
        this.quantites.push(i);
      }
    },
    onChangeQuantity(event) {
      this.medicament.quantite = +event.target.value;
    },
    ajouter() {
      this.form.medicaments.push(this.medicament);
      let medicament = this.medicaments.find(
        (medicament) => medicament.id === +this.medicament.id
      );
      this.medicamentsDeleted.push(medicament);
      let index = this.medicaments.indexOf(medicament);
      this.medicaments.splice(index, 1);
      this.quantites = [];
      this.medicament = {
        id: "",
        nom: "",
        quantite: null,
      };
    },
    unstage(medicamentt) {
      let medicamentAdd = this.medicamentsDeleted.find(
        (medicament) => (medicament.id = +medicamentt.id)
      );
      let index1 = this.form.medicaments.indexOf(medicamentt);
      this.form.medicaments.splice(index1, 1);
      this.medicaments.push(medicamentAdd);
      let index2 = this.medicamentsDeleted.indexOf(medicamentAdd);
      this.medicamentsDeleted.splice(index2, 1);
      this.medicaments.sort(function(a, b) {
        if (a.nom < b.nom) {
          return -1;
        }
        if (a.nom > b.nom) {
          return 1;
        }
        return 0;
      });
    },
  },
};
</script>

<style scoped>
.command {
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

.center {
  width: 100%;
}

h2 {
  font-size: 22px;
}
.list-group-item,
p {
  color: #495057;
}

.badge-primary {
  background-color: #495057;
}
.badge-danger {
  transition: 0.4s;
}
.badge-danger:hover {
  background-color: #b12c39;
  cursor: pointer;
}
.success{
  width: 60%;
  margin: auto;
      text-align: center;
}

.success.alert{
    text-align: left;
}
</style>
