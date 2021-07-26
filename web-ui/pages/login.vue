<template>
  <div class="App">
    <section class="App__landing">
      <b-btn
        size="lg"
        :disabled="isSubmitting"
        @click="onLoginClick"
        v-text="'Login'"
      />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  data: () => ({
    isSubmitting: false,
  }),
  methods: {
    ...mapActions({
      signInWithPopup: 'account/signInWithPopup',
    }),
    async onLoginClick() {
      this.isSubmitting = true
      await this.signInWithPopup()
      this.isSubmitting = false
    },
  },
})
</script>

<style lang="scss">
.App {
  &__landing {
    display: flex;
    width: 100%;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
  }
}
</style>
