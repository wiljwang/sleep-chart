export default (state, action) => {
  switch (action.type) {
    case "DELETE_DATUM":
      return {
        ...state,
        data: state.data.filter((datum) => datum.id !== action.payload),
      };
    case "ADD_DATUM":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};
