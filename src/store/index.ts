import Vue from "vue";
import Vuex, { createLogger } from "vuex";
import axios from 'axios';

import { Project, Status } from '@/types';

import { remapProjects, sortList, filterList, getSortDirection } from '@/utils/projects';
import { getProjectCountsByStatuses, getOverdueProjectsCount, getMostProminentLang } from '@/utils/overview';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    list: {
      originalList: [] as Project[],
      filteredList: [] as Project[],
      sort: {
        key: 'dateCreated' as keyof Project,
        direction: 'desc' as 'asc' | 'desc',
      },
      filter: '',
    },
    overview: {
      projectStatusesCount: {
        NEW: 0,
        COMPLETED: 0,
        DELIVERED: 0,
      } as Record<Status, number>,
      overdueProjectsCount: 0,
      mostProminentLangs: [] as string[],
    }
  },
  actions: {
    fetchProjects({ commit }) {
      axios('/projects').then(response => {
        commit('fetchProjectsSuccess', remapProjects(response.data?._embedded?.projects || []));
      })
        .catch((error) => {
          console.log(error.statusText)
        });
    }
  },
  mutations: {
    fetchProjectsSuccess(state, data:Project[]) {
      state.list.originalList = data;
      state.list.filteredList = sortList(filterList(data, state.list.filter), state.list.sort);
      state.overview.projectStatusesCount = getProjectCountsByStatuses(data);
      state.overview.overdueProjectsCount = getOverdueProjectsCount(data);
      state.overview.mostProminentLangs = getMostProminentLang(data);
    },
    handleFilterChange(state, value) {
      state.list.filter = value;
      state.list.filteredList = filterList(state.list.originalList, value);
    },
    handleSortChange(state) {
      state.list.filteredList = sortList(state.list.filteredList, state.list.sort);
    },
  },
  modules: {},
  plugins: [createLogger()],
});
