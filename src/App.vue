<script>

import CcUser from './components/users/main'
import { mapState, mapActions } from 'vuex'

export default {

  name: 'CodeCastsApp',

  mounted(){
       const payload = {

        name: 'Helio',

        email: 'helioelias@gmail.com',

        level: 'admin-da-desgraca-toda',

        city: 'Bragança Paulista',

        state: 'SP'

      }

      setTimeout(() => {
        
        
        this.changeUser(payload)
        
        //this.$store.dispatch('changeUser', payload)

        
        //this.$store.commit('CHANGE_USER', payload)

      }, 3000);


  },

  components:{
    CcUser
  },

  methods: {

    ...mapActions(['changeUser'])

  },
  computed: {
    
    /*
      outraCoisa() {

          return 'Mais uma info!'

      },

      ...mapState({
        user: state => {
            const { name, email } = state.user

            return `O usuario logado é ${name} e possui o email ${email}.`
        }
      })

    
    user() {
        const { name, email } = this.$store.state.user
      return `O usuario logado é ${name} e possui o email ${email}.`
    }
    */
  }
}
</script>

<template>
  <div>
    <h1>Welcome Vue2</h1>
    <h4>{{ user }} {{ outraCoisa }}</h4>
    <hr>
    <cc-user></cc-user>
  </div>
</template>




