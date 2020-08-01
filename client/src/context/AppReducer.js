export default (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "DELETE_DATUM":
      return {
        ...state,
        data: state.data.filter((datum) => datum._id !== action.payload),
      };
    case "ADD_DATUM":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "DATA_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
