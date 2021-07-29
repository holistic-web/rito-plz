<template>
  <b-navbar class="TopBar" variant="dark">
    <b-navbar-brand href="#" class="TopBar__brand"> RitoPlz </b-navbar-brand>

    <b-nav>
      <b-nav-item-dropdown
        v-if="isLoggedIn"
        class="TopBar__nav"
        text="Account"
        right
      >
        <b-dropdown-item href="#"> Profile </b-dropdown-item>
        <!-- #TODO: add link to profile page -->
        <b-dropdown-item @click="onSignOutClick"> Sign Out </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
  </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters({
      isLoggedIn: 'account/isLoggedIn',
    }),
  },
  methods: {
    ...mapActions({
      logOut: 'account/logOut',
    }),
    onSignOutClick() {
      this.logOut()
    },
  },
})
</script>

<style lang="scss">
$textColor: white;

.TopBar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &__brand {
    color: $textColor !important;
  }

  &__nav > a {
    color: $textColor !important;
  }
}
</style>
