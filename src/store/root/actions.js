const plus = (state, payload) => {
    state.commit('COUNT_PLUS',payload)
  };
  const moins = (state, payload) => {
    state.commit('COUNT_MOINS',payload)
  };
  export default {
    plus,
    moins
  };
