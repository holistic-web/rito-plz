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
$menuHeight: 54px;

.Home {
  display: flex;
  width: 100%;
  min-height: calc(100vh - $menuHeight);
  justify-content: center;
  align-items: center;

  // only use this while it's a holding page, this makes it full screen
  position: absolute;
  top: $menuHeight;
}
</style>
