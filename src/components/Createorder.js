import React, { useState, useContext } from 'react'
import Axios from 'axios'
// import socket from './socket'
import Heder from './Heder'
import { ContextStore } from './Store'
// import io from 'socket.io-client'
// import io from 'socket.io-client'
// https://concrete-react.herokuapp.com/
export default function Createorder() {

    // const socket = io('https://concrete-react.herokuapp.com/', {
    //     query: {
    //       token: localStorage.getItem('token'),
    //     },
    //   });
    
 
         const val = useContext(ContextStore)
         
   
    const[orderName,setorderName]=useState('')
    const[cupAmount,setcupAmount]=useState('')
    const [createdOrder, setcreatedOrder] = useState(false)
    const [loading, setLoading] = useState(false)
    // function emitms1() {
    //     let token=localStorage.getItem('token');
    //     //*********************************************** */
    //     socket.emit('message', { name:'anas',message:token })
    //     // console.log('em');
    //         // setrendercomponent(!rendercomponent)
    //         //************************************************* */
    //     }
        


    const handelSubmit=(e)=>{
        e.preventDefault()
        let token=localStorage.getItem('token'); 
        var config = {
        headers: { 
          'x-auth-token':token
          }}

        //   orderName,
        //   orderDirection,
        //  cupAmount,
        //  finishOrder,
        //  dateFinished
        setLoading(true)
  const {orderName,orderDirection,orderType,cupAmount}=e.target.elements
 let date=new Date
 let order={orderName:orderName.value,orderDirection:orderDirection.value,orderType:orderType.value,cupAmount:cupAmount.value ,finishOrder:'b1',dateFinished:null}
// console.log(order);
Axios.post('https://concrete-react.herokuapp.com/users/add',order,config)
.then((res)=>{
    setcreatedOrder('הזמנה נוספה בהצלחה')
    setLoading(false)
    // console.log(res);
    // setTimeout(() => {
        val.emitms1()                  
    //    
    // },1500);
    })
.catch((err)=>{
    setcreatedOrder('!!הזמנה לא נוספה')
    setLoading(false)
    // console.log(err);

})

    }
    return (
        <div   >
             <Heder/>
            {loading?<h1>...מוריד</h1>:''} 
            <h1>{createdOrder}</h1>
            <form style={{backgroundColor:'rgb(190, 185, 185)' ,padding:'50px'}} className='container' onSubmit={handelSubmit}>
                  <h3 style={{marginTop:'30px'}}>اسم الطلبيه/שם ההזמנה</h3>
                    <input onChange={(e)=>{setcupAmount(e.target.value)}} className='form-control' type='text' minLength='1'  name='orderName' placeholder='order Name'></input>
                        <h3 style={{marginTop:'30px'}}>عنوان/כתובת</h3>
                    <input onChange={(e)=>{}} className='form-control' type='text' name='orderDirection' minLength='1'  placeholder='orderDirection'></input>
                    <h3 style={{marginTop:'30px'}}>نوع الطلبيهَ/סוג ההזמנה</h3>
                    <input onChange={(e)=>{}} className='form-control' type='text' name='orderType' minLength='1' placeholder='order Type'></input>
                      <h3 style={{marginTop:'30px'}}>كوب/קוב</h3>
                    <input onChange={(e)=>{setorderName(e.target.value)}} className='form-control' type='text' minLength='1' name='cupAmount'  placeholder='cup Amount'></input>
            <button className='btn btn-primary m-4' type='submit' onClick={() => {}}>הכנת הזמנה</button>
         </form>
        </div>
       
    )
}
