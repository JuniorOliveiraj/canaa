import { useState, createContext } from 'react';



// components

// mock
//import USERLIST from '../../_mock/user';





export const AlteracaoThema = createContext({});

export const AlterThema = ({ children }) => {




  const asas ="oiedasdas"
  return (
    <AlteracaoThema.Provider
      value={{ asas }}>
      {children}
    </AlteracaoThema.Provider>
  )

}




