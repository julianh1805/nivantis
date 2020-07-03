<template>
  <div class="add">
    <h1 class="espace href" v-on:click="navigate()">Espace DMO</h1>
    <h1 class="espace">> Ajouter des données sur une officine</h1>
    <b-form class="mt-4">
      <b-form-group id="pharmacie" label="Pharmacie:" label-for="pharmacie">
        <b-form-select
          id="pharmacie"
          placeholder="Pharmacie"
          v-model="form.pharmacie"
          required
          @change="isSelected= true"
        >
          <b-form-select-option
            v-for="pharmacie in pharmacies"
            :key="pharmacie.id"
            :value="pharmacie"
            >{{ pharmacie.name }}
          </b-form-select-option>
        </b-form-select>
      </b-form-group>
            <div v-if="showAlert" class="success">
        <b-alert variant="success" :show="showAlert" dismissible
          >Officine modififée</b-alert
        >
        <b-button class="btn principal" type="button" v-on:click="navigate()">Revenir à l'accueil</b-button>
      </div>
      <div v-if="isSelected">
      <b-form-group
        id="nb_pharmacien"
        label="Nombre de pharmaciens :"
        label-for="nb_pharmacien"
      >
        <b-form-input
          id="nb_pharmacien"
          type="number"
          v-model="form.pharmacie.nbEmployee"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="horaires" label="Horaires :">
        <b-container fluid="lg">
          <b-row>
            <b-card
              v-for="hour in form.pharmacie.openDays"
              label="Horaires"
              :key="hour.id"
              :value="hour"
              ><label>{{ hour.day.toUpperCase() }}</label>
              <b-form-input
                id="open"
                type="time"
                required
                v-model="hour.open"
                v-if="hour.isOpen"
              />
              <b-form-input
                id="close"
                type="time"
                required
                v-model="hour.close"
                v-if="hour.isOpen"
              />
              <b-form-checkbox
                v-model="hour.isOpen"
                switch
                size="lg"
                v-if="hour.isOpen"
              >
                Ouvert
              </b-form-checkbox>
              <b-form-checkbox
                v-model="hour.isOpen"
                switch
                size="lg"
                v-if="!hour.isOpen"
              >
                Fermé
              </b-form-checkbox>
            </b-card>
          </b-row>
        </b-container>
      </b-form-group>
      <b-form-group id="garde" label="Jour de garde :" label-for="garde">
        <b-form-checkbox-group
          id="checkbox-group-jour_garde"
          v-model="selected"
          :options="options"
          name="flavour-2"
          text-field="jour"
          value-field="jour"
        ></b-form-checkbox-group>
      </b-form-group>
      <b-form-group id="achats" label="Les achats en € :" label-for="achats">
        <b-form-input
          id="achats"
          type="number"
          v-model="form.pharmacie.buyAmount"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="ventes" label="Les ventes en € :" label-for="ventes">
        <b-form-input
          id="ventes"
          type="number"
          v-model="form.pharmacie.salesAmount"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="besoins"
        label="Les besoins en formation :"
        label-for="besoins"
      >
        <b-form-textarea
          v-model="form.pharmacie.comment"
          id="textarea"
          rows="2"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <div class="center">
        <b-button type="button" class="principal mr-1" v-on:click="submit()"
          >Envoyer</b-button
        >
        <b-button type="button" class="secondary ml-1" v-on:click="navigate()"
          >Annuler</b-button
        >
      </div>
      </div>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>
<script>
import router from "../../router/index";
import { db } from "../../db.js";

export default {
  data() {
    return {
      form: {
        pharmacie: {},
      },
      isSelected: false,
      showAlert: false,
      pharmacies: [],
      selected: [],
      options: [
        { jour: "Lundi" },
        { jour: "Mardi" },
        { jour: "Mercredi" },
        { jour: "Jeudi" },
        { jour: "Vendredi" },
        { jour: "Samedi" },
        { jour: "Dimanche" },
      ],
    };
  },
  firebase: {
    pharmacies: db.database().ref("pharmacies"),
  },
  methods: {
    navigate() {
      router.go(-1);
    },
    submit() {
      db.database()
        .ref("pharmacies/" + this.form.pharmacie.id)
        .set(this.form.pharmacie)
        .then(() => {
          this.isSelected = false;
          this.showAlert = true;

        });
    },
  },
};
</script>
<style scoped>
.add {
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
  margin: 32px 0;
}
</style>
