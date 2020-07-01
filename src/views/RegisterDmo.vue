<template>
  <div class="register">
    <h1>Inscription DMO</h1>
    <form>
        <div>
            <label>Pseudo</label>
            <input type="text" name="name" placeholder="Pseudo" v-model.trim="name"/>
        </div>
        <div>
            <label>Email</label>
            <input type="mail" name="email" placeholder="Adresse email" v-model.trim="email"/>
        </div>
        <div>
            <label>Mot de passe</label>
            <input type="password" name="password" placeholder="Mot de passe" v-model="password"/>
        </div>
        <div>
            <label>Confirmer le mot de passe</label>
            <input type="password" name="password_confirmation" placeholder="Confirmation du mot de passe" v-model="password_confirmation"/>
        </div>

        <div class="submit button" @click.prevent="register">S'inscrire</div>

        <!--<div class="errors" v-bind:if="hasErrors">
            <p v:bind-for="error in errors">{{ error }}</p>
        </div>-->
    </form>
  </div>
</template>

<script>
import firebase from 'firebase';
//import md5 from 'md5'

export default {
  name: "RegisterDmo",
  date () {
      return{
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
          errors: [],
          usersRef: firebase.database().ref('users')
      }
  },
  computed: {
      hasErrors() {
          return this.errors.length > 0
      }
  },
  methods: {
      register () {
          this.errors=[]

          if(this.isFormValid()){
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then( (userCredentials) => {
                console.log(this.name)
                if(userCredentials.user){
                    userCredentials.user.updateProfile({
                        displayName: this.name
                    }).then( () => {
                        //enregistrement de l'utilisateur en BDD
                        this.saveUserToUserRef(userCredentials).then( () => {
                            this.$store.dispatch("setUser",userCredentials.user)
                            this.$router.push('/login/dmo')
                        })
                    }, error => {
                        console.log(error)
                        this.errors.push(error.message)
                    })
                }
            }).catch(error => {
                console.log(error)
                this.errors.push(error.message)
            })
          }
      },
      saveUserToUserRef(userCredentials) {
        console.log(this.usersRef)
        console.log(userCredentials)
        this.usersRef.child(userCredentials.user.uid).set({
            name: userCredentials.user.displayName,
            email: userCredentials.user.displayEmail,
            password: userCredentials.user.displayPassword
        })
      },
      isEmpty () {
          if(this.name.length == 0 || this.email.length== 0 || this.password.length == 0 || this.password_confirmation.length == 0){
              return true;
          }

          return false;
      },
      passwordValid () {
          if(this.password.length < 6 || this.password_confirmation.length <6){
              return false
          }

          if(this.password !== this.password_confirmation){
              return false
          }

          return true
      },
      isFormValid () {
          if(this.isEmpty()){
              this.error.push('Veuillez remplir tous les champs')
              return false
          }
          if(!this.passwordValid()){
              this.error.push('Mot de passe incorrect')
              return false
          }

          return true
      }
  }
};
</script>
