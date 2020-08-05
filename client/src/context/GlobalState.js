import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// initial state
const initialState = {
  // app
  data: [],
  error: null,
  loading: true,
  // auth
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  // error
  message: {},
  status: null,
  id: null,
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const getData = async () => {
    try {
      const res = await axios.get("/api/v1/data");
      dispatch({
        type: "GET_DATA",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "DATA_ERROR",
        payload: error.response.data.error,
      });
    }
  };

  const deleteDatum = async (id) => {
    try {
      await axios.delete(`/api/v1/data/${id}`);
      dispatch({
        type: "DELETE_DATUM",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "DATA_ERROR",
        payload: error.response.data.error,
      });
    }
  };

  const addDatum = async (datum) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/v1/data", datum, config);
      dispatch({
        type: "ADD_DATUM",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "DATA_ERROR",
        payload: error.response.data.error,
      });
    }
  };

  // check token and load user
  const loadUser = () => {
    // user loading
    dispatch({ type: "USER_LOADING" });

    axios
      .get("/api/v1/auth/user", tokenConfig(state))
      .then((res) => dispatch({ type: "USER_LOADED", payload: res.data }))
      .catch((error) => {
        dispatch(returnErrors(error.response.data, error.response.status));
        dispatch({ type: "AUTH_ERROR" });
      });
  };

  // return errors
  const returnErrors = (message, status, id = null) => {
    return {
      type: "GET_ERRORS",
      payload: { message, status, id },
    };
  };

  // clear errors
  const clearErrors = () => {
    return {
      type: "CLEAR_ERRORS",
    };
  };

  // register user
  const register = ({ name, email, password }) => {
    // headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // request body
    const body = JSON.stringify({ name, email, password });

    axios
      .post("/api/users", body, config)
      .then((res) => dispatch({ type: "REGISTER_SUCCESS", payload: res.data }))
      .catch((err) => {
        dispatch(
          returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
        );
        dispatch({ type: "REGISTER_FAIL" });
      });
  };

  // log in user
  const login = ({ email, password }) => {
    // headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // request body
    const body = JSON.stringify({ email, password });

    axios
      .post("/api/auth", body, config)
      .then((res) => dispatch({ type: "LOGIN_SUCCESS", payload: res.data }))
      .catch((err) => {
        dispatch(
          returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
        );
        dispatch({ type: "LOGIN_FAIL" });
      });
  };

  // log out user
  const logout = () => {
    return {
      type: "LOGOUT_SUCCESS",
    };
  };

  return (
    <GlobalContext.Provider
      value={{
        data: state.data,
        error: state.error,
        loading: state.loading,
        getData,
        deleteDatum,
        addDatum,
        loadUser,
        clearErrors,
        register,
        login,
        logout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// set up config/headers and token
export const tokenConfig = (state) => {
  // get token from localstorage
  const token = state.token;

  // headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // if token, then add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
