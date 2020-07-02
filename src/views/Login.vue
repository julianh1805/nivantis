<template>
  <div class="login">
    <h1>Connexion {{ $route.params.espace }}</h1>

    <form v-if="$route.params.espace===dmo">


        
        <div>
            <label>Email</label>
            <input type="mail" name="email" placeholder="Adresse email" v-model="email" required/>
        </div>
        <div>
            <label>Mot de passe</label>
            <input type="password" name="password" v-model="password" required/>
        </div>

        <div class="submit button" @click.prevent="loginDmo">Se connecter</div>

        <div class="errors" v:bind-if="hasErrors">
            <p v:bind-for="error in errors">{{ error }}</p>
        </div>
    </form>

    <form v-else>
        <div>
            <label>Email</label>
            <input type="mail" name="email" placeholder="Adresse email" v-model="email" required/>
        </div>
        <div>
            <label>Mot de passe</label>
            <input type="password" name="password" v-model="password" required/>
        </div>

        <div class="submit button" @click.prevent="loginNivantis">Se connecter</div>

        <div class="errors" v:bind-if="hasErrors">
            <p v:bind-for="error in errors">{{ error }}</p>
        </div>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: "Login",
  date () {
      return{
          email: '',
          password: '',
          errors: []
      }
  },
  computed: {
      hasErrors() {
          return this.errors.length > 0
      }
  },
  methods: {
      loginNivantis () {
          console.log('login')
          this.errors=[]
          if(this.isFormValid()){
              firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(user => {
                  this.$store.dispatch('setUser',user)
                  this.$router.push('/dmo/Home')
              }).catch(error => {
                  this.errors.push(error.message)
              })
          }
      },
      loginDmo () {
          console.log('login')
          this.errors=[]
          if(this.isFormValid()){
              firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(user => {
                  this.$store.dispatch('setUser',user)
                  this.$router.push('/dmo/Home')
              }).catch(error => {
                  this.errors.push(error.message)
              })
          }
      },
      isFormValid () {
          if(this.email.length > 0 && this.password.length > 0){
              return true
          }

          return false
      }
  }
};
</script>