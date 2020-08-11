<template>
  <div id="app">
    <md-toolbar class="md-accent" v-if="error">
      Error occurred, please try reload page.
    </md-toolbar>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  computed: {
    error: {
      get: function() {
        return this.$store.state.error;
      }
    },
  },
});
</script>


<style lang="scss">
.List-Page {
  margin: 0 0.5rem;
}

a .md-button.md-raised {
  margin: 0;
}
</style>
