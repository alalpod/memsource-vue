<template>
  <div class="Table-List">
    <md-table :value="projects" :md-sort.sync="sort.key" :md-sort-order.sync="sort.direction" :md-sort-fn="handleSort">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">
          <router-link to="/edit/{item.id}">{{ item.name }}</router-link>
        </md-table-cell>
        <md-table-cell md-label="Source Language" md-sort-by="sourceLanguage">{{ item.sourceLanguage }}</md-table-cell>
        <md-table-cell md-label="Target Languages" md-sort-by="targetLanguages">{{ item.targetLanguages }}</md-table-cell>
        <md-table-cell md-label="Status" md-sort-by="status">{{ item.status }}</md-table-cell>
        <md-table-cell md-label="Creation Date" md-sort-by="dateCreated">{{ item.dateCreated.format(config.dateTimeFormat) }}</md-table-cell>
        <md-table-cell md-label="Modification Date" md-sort-by="dateUpdated">{{ item.dateUpdated.format(config.dateTimeFormat) }}</md-table-cell>
        <md-table-cell md-label="Due Date" md-sort-by="dateDue">{{ item.dateDue.format(config.dateTimeFormat) }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from 'vuex';
import config from '@/config';

export default Vue.extend({
  name: "Table",
  computed: mapState({
    projects: (state) => state.list.filteredList,
    sort: (state) => state.list.sort,
  }),
  data: () => ({
    config,
  }),
  methods: {
    handleSort() {
      this.$store.commit('handleSortChange');
    }
  }
});
</script>

<style lang="scss">
.Table-List {
  .md-table-head-label {
    font-weight: 700;
    text-transform: uppercase;
  }
}
</style>
