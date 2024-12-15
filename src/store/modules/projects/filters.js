const filters = {
    namespaced: true,
    state: () => ({
      selectedFilter: 'All',
    }),
    mutations: {
      setFilter(state, filter) {
        state.selectedFilter = filter;
      }
    },
    actions: {
      updateFilter({ commit }, filter) {
        console.log('updateFilter', filter);
        commit('setFilter', filter);
      }
    },
    getters: {
      selectedFilter: (state) => state.selectedFilter
    }
  };
  
  export default filters;