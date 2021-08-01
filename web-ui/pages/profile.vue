<template>
  <section class="Profile">
    <b-spinner v-if="isLoading" variant="primary" class="Profile__loader" />
    <b-container v-else>
      <h1>Profile</h1>
      <b-alert :show="accountNeedsSetup" variant="danger">
        You need to associate a Summoner account
      </b-alert>
      <section class="Profile__summoner">
        <b-form-group
          label="Enter your summoner name"
          label-for="Profile__summoner__id"
          class="Profile__summoner__id"
        >
          <b-form-input
            id="Profile__summoner__id"
            v-model="editedSummonerId"
            placeholder="BestTeemoEUW"
          />
        </b-form-group>
        <b-form-group
          label="Select your region"
          label-for="Profile__summoner__region"
        >
          <b-form-select
            id="Profile__summoner__region"
            v-model="editedRegion"
            :options="servers"
            size="sm"
          />
        </b-form-group>
      </section>
      <b-btn
        variant="primary"
        :disabled="isUpdateDisabled"
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
    editedRegion: null,
  }),
  computed: {
    ...mapGetters({
      user: 'account/user',
      servers: 'rito/servers',
    }),
    accountNeedsSetup() {
      if (!this.user) return false
      return !this.user.summonerId
    },
    isUpdateDisabled() {
      if (this.isSubmitting) return true
      if (!this.editedSummonerId) return true
      if (!this.editedRegion) return true
      if (
        this.editedSummonerId === this.user.summonerId &&
        this.editedRegion === this.user.region
      )
        return true
      return false
    },
  },
  watch: {
    user: {
      immediate: true,
      handler() {
        if (!this.user) return
        this.editedSummonerId = this.user.summonerId
        this.editedRegion = this.user.region
      },
    },
  },
  created() {
    ;(this as any).fetchData()
  },
  methods: {
    ...mapActions({
      fetchUser: 'account/fetchUser',
      updateUser: 'account/updateUser',
      getServers: 'rito/getServers',
    }),
    async onUpdateClick() {
      this.isSubmitting = true
      const update = {
        summonerId: this.editedSummonerId,
        region: this.editedRegion,
      }
      await (this as any).updateUser({ update })
      alert('User updated!')
      this.isSubmitting = false
    },
    async fetchData() {
      this.isLoading = true
      await Promise.all([
        (this as any).fetchUser({ id: this.user.uid }),
        (this as any).getServers(),
      ])
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

  &__summoner {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &__id {
      width: 70%;
    }
  }
}
</style>
