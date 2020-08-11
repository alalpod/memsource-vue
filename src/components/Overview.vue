<template>
  <div class="Overview">
      <h2>Overview</h2>
      <h3>Projects</h3>
      <div>
        <md-content class="md-elevation-3" v-for="(status) in config.projectStatuses" v-bind:key="status">
          <h4>{{messages.status[status]}}</h4>
          <p>{{overview.projectStatusesCount[status]}}</p>
        </md-content>
      </div>
      <div>
        <md-content class="md-elevation-3">
          <h4>Projects Overdue</h4>
          <p>{{overview.overdueProjectsCount}}</p>
        </md-content>
        <md-content class="md-elevation-3">
          <h4>Most prominent language{{overview.mostProminentLangs.length > 1 ? 's' : ''}}</h4>
          <p>{{overview.mostProminentLangs.join(', ')}}</p>
        </md-content>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from 'vuex';
import config from '@/config';
import messages from '@/constants/messages';

export default Vue.extend({
  name: "Overview",
  computed: mapState({
    overview: 'overview',
  }),
  data: () => ({
    config, messages,
  })
});
</script>

<style lang="scss" scoped>
.Overview {
  & > div {
    display: flex;
    margin: 1rem 0;
  }

  .md-content {
    flex: 1 1 100%;
    margin: 0 2rem 0 0;
    padding: 0.25rem 1rem;

    &:last-child {
      margin: 0;
    }
  }

  h4 {
    text-transform: uppercase;
  }

  p {
    font-size: 2rem;
  }
}
</style>