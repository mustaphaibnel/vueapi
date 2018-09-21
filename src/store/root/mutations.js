const COUNT_PLUS = (state, payload) => {
    state.count += payload;
  };
  const COUNT_MOINS = (state, payload) => {
    state.count -= payload;
  };
  export default {
    COUNT_PLUS,
    COUNT_MOINS
  };
