


import React , { createContext, useState } from "react";
import { coursData } from "../utilits/PageOneData";

export const KurslarimizContext = createContext();

export const KurslarimizContextProvider = ({children}) =>{

    const [ data, setData ] = useState(coursData);

    return(
        <KurslarimizContext.Provider value={[data, setData]} >
            {children}
        </KurslarimizContext.Provider>
    )


}