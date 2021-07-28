<template>
  <section class="Home">
    <h1>rito-plz</h1>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
.Home {
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;

  // only use this while it's a holding page, this makes it full screen
  position: absolute;
  top: 0;
}
</style>
