import React, { createContext, useContext, useReducer } from "react";


//Prepares the dataLayer
export const StateContaxt = createContext();



//Wrap app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContaxt.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContaxt.Provider>
);

//Pull information from the data layer
export const useStateValue = () => useContext(StateContaxt);
   