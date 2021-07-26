<template>
  <b-navbar class="TopBar" variant="dark">
    <b-navbar-brand href="#" class="TopBar__brand"> RitoPlz </b-navbar-brand>

    <b-nav>
      <b-nav-item-dropdown text="Account" right>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <!-- #TODO: add link to profile page -->
        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        <!-- #TODO: add signout functionality  -->
      </b-nav-item-dropdown>
    </b-nav>
  </b-navbar>
</template>

<style lang="scss">
.TopBar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &__brand {
    color: white !important;
  }
}
</style>
