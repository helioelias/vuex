<script>

import CcUser from './components/users/main'
import { mapState } from 'vuex'

export default {

  name: 'CodeCastsApp',

  mounted(){
       const payload = {

        name: 'Helio',

        email: 'helioelias@gmail.com',

        level: 'admin-da-desgraca-toda'

      }

      setTimeout(() => {
        this.$store.commit('CHANGE_USER', payload)
      }, 3000);


  },

  components:{
    CcUser
  },
  computed: {

      ...mapState({
        user: state => {
            const { name, email } = state.user

            return `O usuario logado é ${name} e possui o email ${email}.`
        }
      })

    /*
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
    <h4>{{ user }}</h4>
    <hr>
    <cc-user></cc-user>
  </div>
</template>




