<template>
  <div class="add">
    <h1 class="espace href" v-on:click="navigate()">Espace DMO</h1>
    <h1 class="espace">> Ajouter des données sur une officine</h1>
    <b-form @submit="onSubmit" class="mt-4">
      <b-form-group id="pharmacie" label="Pharmacie:" label-for="pharmacie">
        <b-form-select id="pharmacie" v-model="form.pharmacie" :options="pharmacies" required></b-form-select>
      </b-form-group>
      <b-form-group id="nb_pharmacien" label="Nombre de pharmaciens :" label-for="nb_pharmacien">
        <b-form-input id="nb_pharmacien" type="number" v-model="form.nb_pharmacien" required></b-form-input>
      </b-form-group>
      <b-form-group id="horaire" label="Horaire d'ouverture :" label-for="horaire">
        <b-form-input id="horaire" type="time" v-model="form.horaire" required></b-form-input>
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
        <b-form-input id="achats" type="number" v-model="form.achats" required></b-form-input>
      </b-form-group>
      <b-form-group id="ventes" label="Les ventes en € :" label-for="ventes">
        <b-form-input id="ventes" type="number" v-model="form.ventes" required></b-form-input>
      </b-form-group>
      <b-form-group id="besoins" label="Les besoins en formation :" label-for="besoins">
        <b-form-textarea v-model="form.besoins" id="textarea" placeholder rows="2" max-rows="6"></b-form-textarea>
      </b-form-group>
      <div class="center">
        <b-button type="submit" class="principal mr-1">Envoyer</b-button>
        <b-button type="submit" class="secondary ml-1" v-on:click="navigate()">Annuler</b-button>
      </div>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template> 
<script>
import router from "../../router/index";
export default {
  data() {
    return {
      form: {
        pharmacie: null,
        nb_pharmacien: null,
        horaire: null,
        garde: null,
        achats: 0,
        ventes: 0,
        besoins: ""
      },
      pharmacies: ["Test 1", "Test 2"],
      selected: [],
      options: [
        { jour: "Lundi" },
        { jour: "Mardi" },
        { jour: "Mercredi" },
        { jour: "Jeudi" },
        { jour: "Vendredi" },
        { jour: "Samedi" },
        { jour: "Dimanche" }
      ]
    };
  },
  methods: {
    navigate() {
      router.go(-1);
    },
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
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