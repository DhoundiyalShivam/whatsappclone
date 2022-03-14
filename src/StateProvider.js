import React, { createContext, useContext, useReducer } from "react"
export const StateContext = createContext();//creaing context where dataLayer lives
//StateProvider is the dataLayer and after that is higher order component which takes reducer,initialState
export const StateProvider = ({ reducer,   initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)
export const useStateValue = () => useContext(StateContext)// this allows us to pull it from the dataLayer