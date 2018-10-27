<script>
export default {

  methods: {

    mudarDados(){

      const payload = {

        name: 'Outro nome',

        email: 'email@email.com',

        level: 'usuario-raso'

      }

      this.$store.commit('CHANGE_USER', payload)

    },
  },

  computed: {
      hasUser() {
          return this.$store.state.user.name !== ''
      }
    }

}
</script>

<style>

</style>

<template>
  <div>
    <button :disabled="!hasUser" @click="mudarDados()">Mudar dados do usuário</button>
  </div>
</template>
