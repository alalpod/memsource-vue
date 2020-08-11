<template>
  <div class="List-Page">
    <Overview />
    <md-content class="md-elevation-3">
      <Toolbar />
      <Table />
    </md-content>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Overview from "@/components/Overview.vue"; // @ is an alias to /src
import Table from "@/components/Table.vue";
import Toolbar from "@/components/Toolbar.vue";

export default Vue.extend({
  name: "List",
  components: {
    Overview,
    Toolbar,
    Table
  },
  created() {
    this.$store.dispatch("fetchProjects");
  }
});
</script>
