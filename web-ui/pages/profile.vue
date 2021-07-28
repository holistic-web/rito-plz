<template>
  <section class="Profile">
    <b-container>
      <h1>Profile</h1>
      <b-alert :show="accountNeedsSetup" variant="danger">
        You need to associate a Summoner account
      </b-alert>
      <b-form-input
        v-model="editedSummonerId"
        class="Profile__summonerInput"
        placeholder="Enter your Summoner name"
      />
      <b-btn
        variant="primary"
        :disabled="isSubmitting"
        @click="onUpdateClick"
        v-text="'Update'"
      />
    </b-container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  data: () => ({
    isSubmitting: false,
    editedSummonerId: null,
  }),
  computed: {
    ...mapGetters({
      user: 'account/user',
    }),
    accountNeedsSetup() {
      return !this.user.summonerId
    },
  },
  watch: {
    user: {
      immediate: true,
      handler() {
        this.editedSummonerId = this.user.summonerId
      },
    },
  },
  methods: {
    async onUpdateClick() {
      this.isSubmitting = true
      await alert('not yet implemented')
      this.isSubmitting = false
    },
  },
})
</script>

<style lang="scss">
.Profile {
  margin: 2rem 0;

  &__summonerInput {
    margin-bottom: 1rem;
  }
}
</style>
