import { createContext } from "react";
import { useState } from "react";

export const darkContext = createContext();




 const ContextProvider = ({children}) => {
  const [dark , setDark] = useState(false);

const toggleDark = () =>{
  setDark(!dark)
}

  return (
    <darkContext.Provider value={{dark ,toggleDark }}>
      {children}
    </darkContext.Provider>
  )
}

export default ContextProvider