import { useState, createContext } from 'react';



// components

// mock
//import USERLIST from '../../_mock/user';





export const AlteracaoThema = createContext({});

export const AlterThema = ({ children }) => {
  const [darkModeThem,  setDarkModeThem] = useState(false)




  return (
    <AlteracaoThema.Provider
      value={{  darkModeThem,  setDarkModeThem }}>
      {children}
    </AlteracaoThema.Provider>
  )

}




