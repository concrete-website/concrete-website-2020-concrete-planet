import React, { useState, useEffect, useContext } from 'react'
import Axios from 'axios'
import { withRouter } from 'react-router-dom'
// import socket from './socket'
import Heder from './Heder'
import io from 'socket.io-client'
import { ContextStore } from './Store'
// const socket = io.connect('http://localhost:3000/')
// props.match.params.id

 // import { ContextStore, } from './Store'
 // val.setdata(val.data+1)
 
 function Uodate({match}) {
     
     const val = useContext(ContextStore)
    
// const socket = io('https://concrete-react.herokuapp.com/', {
//     query: {
//       token: localStorage.getItem('token'),
//     },
//   });

    const[orderName,setorderName]=useState('')
    const [orderDirection, setorderDirection] = useState('')
    const [orderType, setorderType] = useState('')
    const[cupAmount,setcupAmount]=useState('')
const [loading, setLoading] = useState(true)
const [createdOrder, setcreatedOrder] = useState(false)
function emitms() {
    let token=localStorage.getItem('token');
    //*********************************************** */
    // socket.emit('message', { name:'anas',message:token })
    // console.log('em');
 
        // setrendercomponent(!rendercomponent)
        //************************************************* */
    }
   useEffect(() => {
       let token=localStorage.getItem('token'); 
       var config = {
           headers: { 
               'x-auth-token':token
      }}
      Axios.get('https://concrete-react.herokuapp.com/users/'+match.params.id,config)
      .then((res)=>{
        //   console.log(res.data.cupAmount);
          setorderName(res.data.orderName)
          setorderDirection(res.data.orderDirection)
          setorderType(res.data.orderType)
          setcupAmount(res.data.cupAmount)
          setLoading(false)
        })
        .catch((err)=>{console.log(err);})
   }, [])
   
    const handelSubmit=(e)=>{
        e.preventDefault()
        let token=localStorage.getItem('token'); 
        var config = {
        headers: { 
          'x-auth-token':token
          }}
          
          const {orderName,orderDirection,orderType,cupAmount}=e.target.elements
          let date= Date.now()
          let order={orderName:orderName.value,orderDirection:orderDirection.value,orderType:orderType.value,cupAmount:cupAmount.value ,finishOrder:'no',dateFinished:null}
// console.log(order);

// ,config
Axios.post('https://concrete-react.herokuapp.com/users/upd/'+match.params.id,order,config)
.then((res)=>{
    // console.log(res);
    setcreatedOrder('ההזמנה שונתה בהצלחה')
    // setTimeout(() => {
                          
    //     emitms()
    // },1500);
    val.emitms1()
     })
.catch((err)=>{console.log(err);
    setcreatedOrder(' !!ההזמנה לא שונתה ')
})

    }

    const editOrder=()=>{
        let iduser=localStorage.getItem('id'); 
        if(iduser=='5f54f79720960f4618748bbe'){
      
            return    <button className='btn btn-primary m-4'   type='submit' onClick={() => {}}>תיקון הזמנה</button>  }}



    return (
        <div>
            <Heder/>
    <h1>{createdOrder}</h1>
            {loading? <h2>...מוריד</h2>:''}
            <form className='container' style={{backgroundColor:'rgb(190, 185, 185)' ,padding:'50px'}} onSubmit={handelSubmit}>
                 <h3 style={{marginTop:'30px'}}>اسم الطلبيه/שם ההזמנה</h3>
            <input onChange={(e)=>{setorderName(e.target.value)}} className='form-control' type='text' name='orderName' placeholder='order Name' defaultValue={orderName}></input>
             <h3 style={{marginTop:'30px'}}>عنوان/כתובת</h3>
                    <input onChange={(e)=>{}} className='form-control' type='text' name='orderDirection' placeholder='orderDirection' defaultValue={orderDirection} ></input>
                     <h3 style={{marginTop:'30px'}}>نوع الطلبيهَ/סוג ההזמנה</h3>
                    <input onChange={(e)=>{}} className='form-control' type='text' name='orderType' placeholder='order type' defaultValue={orderType} ></input>
<h3 style={{marginTop:'30px'}}>كوب/קוב</h3>
                  <input onChange={(e)=>{setcupAmount(e.target.value)
               }} className='form-control' type='text' name='cupAmount' placeholder='cup Amount' defaultValue={cupAmount} ></input>
                  {editOrder()}
            {/* <button className='btn btn-primary' type='submit' onClick={() => {}}>תיקון הזמנה</button> */}
         </form>

         {/* <button  className='btn btn-primary m-4' onClick={() =>{ emitms()
        //  setflag(!flag)
         }}>update for all</button> */}
        </div>
   
    )
}
export default withRouter(Uodate)