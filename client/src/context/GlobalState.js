import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  data: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const deleteDatum = (id) => {
    dispatch({
      type: "DELETE_DATUM",
      payload: id,
    });
  };

  const addDatum = (datum) => {
    dispatch({
      type: "ADD_DATUM",
      payload: datum,
    });
  };

  return (
    <GlobalContext.Provider value={{ data: state.data, deleteDatum, addDatum }}>
      {children}
    </GlobalContext.Provider>
  );
};
