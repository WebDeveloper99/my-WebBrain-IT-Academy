


import React, { createContext } from "react";
import { KurslarimizContextProvider } from "./KurslarContext";


export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    return (
        <GlobalContext.Provider value={'a'} >
            <KurslarimizContextProvider>
                {children}
            </KurslarimizContextProvider>
        </GlobalContext.Provider>
    )

}