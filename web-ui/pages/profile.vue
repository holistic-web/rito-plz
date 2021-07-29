<template>
  <section class="Profile">
    <b-spinner v-if="isLoading" variant="primary" class="Profile__loader" />
    <b-container v-else>
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
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  data: () => ({
    isLoading: false,
    isSubmitting: false,
    editedSummonerId: null,
  }),
  computed: {
    ...mapGetters({
      user: 'account/user',
    }),
    accountNeedsSetup() {
      if (!this.user) return false
      return !this.user.summonerId
    },
  },
  watch: {
    user: {
      immediate: true,
      handler() {
        if (!this.user) return
        this.editedSummonerId = this.user.summonerId
      },
    },
  },
  created() {
    ;(this as any).fetchData()
  },
  methods: {
    ...mapActions({
      fetchUser: 'account/fetchUser',
    }),
    async onUpdateClick() {
      this.isSubmitting = true
      await alert('not yet implemented')
      this.isSubmitting = false
    },
    async fetchData() {
      this.isLoading = true
      await (this as any).fetchUser({ id: this.user.uid })
      this.isLoading = false
    },
  },
})
</script>

<style lang="scss">
.Profile {
  margin: 2rem 0;
  display: flex;
  justify-content: center;

  &__loader {
    width: 3rem;
    height: 3rem;
  }

  &__summonerInput {
    margin-bottom: 1rem;
  }
}
</style>
