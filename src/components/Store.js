import React, { createContext, useState, useEffect } from 'react'
import io from 'socket.io-client'
export const ContextStore = createContext()

let socket;
export  function Store(props) {

const [data, setdata] = useState(localStorage.getItem('token'))
const [sok, setsok] = useState(false)
const [testdata, setTestdata] = useState('')
const ENDPOINT='https://concrete-react.herokuapp.com/'
// const ENDPOINT='http://localhost:5000/'
useEffect(() => {
   
 
     socket = io(ENDPOINT, {
        query: {
          token: localStorage.getItem('token'),
        },
      });
      emitms1()
console.log('first socekt');
    }, [])


    useEffect(() => {
  
        socket.on('connect', () => {
            // setTestdata(data)
      console.log('connected');
   
          })
   
        }, [])

useEffect(() => {
  
    socket.on('message', ({ name, data }) => {
        console.log(name);
        setTestdata(data)
  console.log('on store');
  if(name!='anas'){alert('تم تغيير شيء')}
//   
      })
console.log('second effect');
    }, [])
// console.log('effect');

      


 function emitms1() {
        let token=localStorage.getItem('token');
        //*********************************************** */
        socket.emit('message', { name:'home',message:token })
        // console.log('em');
            // setrendercomponent(!rendercomponent)
            //************************************************* */
        }
console.log('rendered store');
    return (
     <ContextStore.Provider value={{data:data,setdata:setdata,sok:sok,setsok:setsok,orders:testdata,setorders:setTestdata,emitms1:emitms1}}>
    
 {props.children}
        
     </ContextStore.Provider>
    )
}
