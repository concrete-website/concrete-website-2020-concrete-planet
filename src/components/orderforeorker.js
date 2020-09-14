import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export default function Orderforeorker() {
   const [state, setstate] = useState('')
    useEffect(() => {

        let token=localStorage.getItem('token'); 
        var config = {
        headers: { 
          'x-auth-token':token
          
        
          }
       }

   Axios.get('https://concrete-react.herokuapp.com/users/ordwrker',config)
   .then((data)=>{
    //    console.log(data.data);
    })
   .catch((err)=>{console.log(err);})
    }, [])


    return (
        <div>
<h1>orders</h1>
        </div>
    )
}
