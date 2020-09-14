import React, { createContext, useState, useEffect } from 'react'
export const ContextStore = createContext()
export  function Store(props) {

const [data, setdata] = useState(localStorage.getItem('token'))
const [sok, setsok] = useState(false)
// const [data2, setdata2] = useState(4)
// setdata(localStorage.getItem('token'))

// useEffect(() => {
//     setdata(localStorage.getItem('token'))
// }, [])
    return (
     <ContextStore.Provider value={{data:data,setdata:setdata,sok:sok,setsok:setsok}}>
    
 {props.children}
        
     </ContextStore.Provider>
    )
}
