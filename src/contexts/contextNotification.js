import { useState, useEffect, createContext } from 'react';





export const contextNotification = createContext({});

export const AuthGoogle = ({ children }) => {
 
    const state = true
 








    return (
        <contextNotification
        value={{   state}}>
            {children}
        </contextNotification>


    )


}
