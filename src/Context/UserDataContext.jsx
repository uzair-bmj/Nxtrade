import React, { createContext, useState } from 'react'

const Data = createContext()

export default function UserDataContext({children}) {
  const [users , setusers  ] = useState([])
  return (
    <>
    <Data.Provider value={{users , setusers}}>
        {children}
    </Data.Provider>
    
    </>
  )
}
export {Data};
