<template>
  <div class="Toolbar">
    <md-field>
      <md-input placeholder="Type to filter..." v-model="filterValue"></md-input>
    </md-field>
    <router-link to="/new">
      <md-button class="md-raised md-primary">
        Create new project
      </md-button>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Toolbar",
  computed: {
    filterValue: {
      get: function() {
        return this.$store.state.list.filter;
      },
      set: function(value) {
        this.$store.commit('handleFilterChange', value);
      }
    }
  },
});
</script>

<style lang="scss" scoped>
.Toolbar {
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  .md-field {
    width: 300px;
    margin: 0;
  }
}
</style>

