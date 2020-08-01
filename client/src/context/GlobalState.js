import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// initial state
const initialState = {
  data: [],
  error: null,
  loading: true,
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

  return (
    <GlobalContext.Provider
      value={{
        data: state.data,
        error: state.error,
        loading: state.loading,
        getData,
        deleteDatum,
        addDatum,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
