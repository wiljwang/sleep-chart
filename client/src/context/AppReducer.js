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
    case "GET_ERRORS":
      return {
        message: action.payload.message,
        status: action.payload.status,
        id: action.payload.id,
      };
    case "CLEAR_ERRORS":
      return {
        message: {},
        status: null,
        id: null,
      };
    case "USER_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_LOADED":
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case "AUTH_ERROR":
    case "LOGIN_FAIL":
    case "LOGOUT_SUCCESS":
    case "REGISTER_FAIL":
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};
