<script>

import CcButton from '../button.vue'

export default {

  components: {
    CcButton
  },

  computed: {

    email() {

      return this.$store.state.user.email

    },

    localidade() {

      return this.$store.getters.localidade

    }

  }
}
</script>

<template>
  <div>
    Email: {{ email }}
    <p>Localidade: {{ localidade }}</p>
    <cc-button></cc-button>
  </div>
</template>
