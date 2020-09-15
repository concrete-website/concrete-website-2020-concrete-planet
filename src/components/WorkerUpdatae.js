


    import React, { useState, useEffect, useContext } from 'react'
import Axios from 'axios'
import { withRouter } from 'react-router-dom'
// import socket from './socket'
import Heder from './Heder'
import io from 'socket.io-client'
import { ContextStore } from './Store'

 // props.match.params.id

 // import { ContextStore, } from './Store'
 // val.setdata(val.data+1)
 function WorkerUpdatae({match}) {
     
     const val = useContext(ContextStore)
    
// const socket = io('https://concrete-react.herokuapp.com/', {
//     query: {
//       token: localStorage.getItem('token'),
//     },
//   });

    const[orderName,setorderName]=useState('')
    const[cupAmount,setcupAmount]=useState('')
const [loading, setLoading] = useState(true)
const [orderDirection, setorderDirection] = useState('')

const [statusbtn1, setStatusbtn1] = useState('green')
const [statusbtn2, setStatusbtn2] = useState('blue')
const [statusbtn3, setStatusbtn3] = useState('blue')

// function emitms() {
//     let token=localStorage.getItem('token');
//     //*********************************************** */
//     socket.emit('message', { name:'anas',message:token })
//     // console.log('em');

//         // setrendercomponent(!rendercomponent)
//         //************************************************* */
//     }



const statusbtn=(e)=>{

    //post
    let token=localStorage.getItem('token'); 
    var config = {
    headers: { 
      'x-auth-token':token
      }}
      
    //   const {cupAmount}=e.target.elements
      let date= new Date
      let order;
switch (e) {
    case ('b1'):{
        setStatusbtn1('green')
        setStatusbtn2('blue')
        setStatusbtn3('blue')
        order={finishOrder:'b1',dateFinished:null}
        // console.log(e);
        break;
    }
    case ('b2'):{
        setStatusbtn1('blue')
        setStatusbtn2('green')
        setStatusbtn3('blue')
        order={finishOrder:'b2',dateFinished:null}
        // console.log(e);
        break;
    }
      case('b3'):{
        setStatusbtn1('blue')
        setStatusbtn2('blue')
        setStatusbtn3('green')
        order={finishOrder:'b3',dateFinished:date}
        // console.log(e);
        break;
      }  
       
    // default:{order={finishOrder:'no',dateFinished:null}}
       
}




// console.log(order);

Axios.post('https://concrete-react.herokuapp.com/users/updw/'+match.params.id,order,config)
.then((res)=>{console.log(res);})
.catch((err)=>{
    setStatusbtn1('green')
        setStatusbtn2('blue')
        setStatusbtn3('blue')
        alert('בעיית אינטרנט/مشكله انترنت')
    console.log(err);

})

}


const getstatusbtn=(e)=>{


switch (e) {
    case ('b1'):{
        // order={finishOrder:'b1',dateFinished:null}
        setStatusbtn1('green')
        setStatusbtn2('blue')
        setStatusbtn3('blue')
        // console.log(e);
        break;
    }
    case ('b2'):{
        // order={finishOrder:'b2',dateFinished:null}
        setStatusbtn1('blue')
        setStatusbtn2('green')
        setStatusbtn3('blue')
        // console.log(e);
        break;
    }
      case('b3'):{
        setStatusbtn1('blue')
        setStatusbtn2('blue')
        setStatusbtn3('green')
        
        // order={finishOrder:'b3',dateFinished:null}
        // console.log(e);
        break;
      }  
       
    // default:{order={finishOrder:'no',dateFinished:null}}
       
}


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
          setcupAmount(res.data.cupAmount)
          setorderDirection(res.data.orderDirection)
          setLoading(false)
      
          getstatusbtn(res.data.finishOrder)
        })
        .catch((err)=>{console.log(err);})
   }, [])

//     const handelSubmit=(e)=>{
//         e.preventDefault()
//         let token=localStorage.getItem('token'); 
//         var config = {
//         headers: { 
//           'x-auth-token':token
//           }}
          
//           const {cupAmount}=e.target.elements
//           let date= Date.now()
//           let order={cupAmount:cupAmount.value ,finishOrder:'no',dateFinished:null}
// console.log(order);

// Axios.post('http://localhost:3000/users/updw/'+match.params.id,order,config)
// .then((res)=>{console.log(res);
//     emitms()})
// .catch((err)=>{console.log(err);

// })

//     }

    // const editOrder=()=>{
    //     // let iduser=localStorage.getItem('id'); 
    //     // if(iduser=='5f54f79720960f4618748bbe'){
    //      return    <button className='btn btn-primary' type='submit' onClick={() => {}}>תיקון הזמנה</button>  }
    //     // }
    return (
        <div>
             <Heder/>
            {loading? <h2>...מוריד</h2>:''}
              <div className='container' style={{backgroundColor:'rgb(190, 185, 185)' ,padding:'50px'}}>
            {/* <form onSubmit={handelSubmit}> */}
          <h3 style={{marginTop:'30px'}}>اسم الطلبيه/שם ההזמנה</h3>
            <input onChange={(e)=>{setorderName(e.target.value)}} className='form-control' type='text' name='orderName' placeholder='order Name' defaultValue={orderName} disabled={true} ></input>
             <h3 style={{marginTop:'30px'}}>عنوان/כתובת</h3>
                    <input onChange={(e)=>{}} className='form-control' type='text' name='orderDirection' placeholder='orderDirection' defaultValue={orderDirection}  disabled={true} ></input>
                <h3 style={{marginTop:'30px'}}>كوب/קוב</h3>
                  <input onChange={(e)=>{setcupAmount(e.target.value)}} className='form-control' type='text' name='cupAmount' placeholder='cup Amount' defaultValue={cupAmount}  disabled={true} ></input>
                  {/* {editOrder()} */}
                  <br/>
                  <br/>
                  <button style={{backgroundColor:statusbtn1}} className='btn btn-primary'  onClick={() => {statusbtn('b1')
                 setTimeout(() => {
                     val.emitms1() 
                     
                    },1000);
                    statusbtn('b1')
              
   
                }}>בהמתנה/في الانتظار</button>
                  <br/>
                  <br/>
                  <button style={{backgroundColor:statusbtn2}} className='btn btn-primary'  onClick={() => {
                      setTimeout(() => {
                          val.emitms1() 
                          
                        },1000);
                        statusbtn('b2')
                    }}>בהכנה/في التحضير</button>
                  <br/>
                  <br/>
                  <button style={{backgroundColor:statusbtn3}} className='btn btn-primary'  onClick={() => {
                      
                      setTimeout(() => {
                          val.emitms1() 
                          
                        },1000);
                        statusbtn('b3')

                      }}>ההזמנה מוכנה/الطلبيه جاهزه</button>
              </div>
            {/* <button className='btn btn-primary' type='submit' onClick={() => {}}>תיקון הזמנה</button> */}
         {/* </form> */}
        </div>
   
    )
}
export default withRouter(WorkerUpdatae)