import React, { useState, useContext, useCallback, useEffect } from 'react'
import Axios from 'axios'
import { ContextStore } from './Store'
import { withRouter } from 'react-router-dom'
import socket from './socket'

 function Login({history,match}) {
    const[userName,setuserName]=useState('')
    const[password,setpassword]=useState('')
const [user, setuser] = useState('')

 // import { ContextStore, } from './Store'
        const val = useContext(ContextStore)
        // val.setdata(val.data+1)
 



        
function emitms() {
    // let token=localStorage.getItem('token');
    //*********************************************** */
    socket.emit('message', { name:'home',message:'dd' })
    // console.log('em');
 
        // setrendercomponent(!rendercomponent)
        //************************************************* */
    }

// console.log(match.path);
useEffect(() => {
    let iduser=localStorage.getItem('id'); 
    if (match.path=='/login'&&val.data&&iduser=='5f54f79720960f4618748bbe') {
        history.push('/')
        
    }
    // else if(match.path=='/login'&&val.data){history.push('/worker')}
}, [])




const handelSubmit=
// useCallback (
    (e)=>{
    
    e.preventDefault()
    
    const {email,  password }= e.target.elements
    let tempouser={email:email.value,password:password.value}
    // console.log( tempouser);
    let token=localStorage.getItem('token'); 
    var config = {
    headers: { 
      'x-auth-token':token
    
      }}


    Axios.post('https://concrete-react.herokuapp.com/auth/login',tempouser,config) 
    
    .then((response) => {
        // console.log(response.data);
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('id',response.data.user.id);
        val.setdata(response.data.token)
        // To get a value:
        
        
        history.push('/')
        // localStorage.getItem('myData'); 
        
    }).catch((err)=>{
        console.log(err);
    })
    
}
// ,[history])
const mounted=()=>{
    let token=localStorage.getItem('token'); 
    var config = {
    headers: { 
      'x-auth-token':token
    
      }
   }
   Axios.get('https://concrete-react.herokuapp.com/auth/user', config) 
    
    .then((response) => {
    // console.log(response.data);
  }).catch((err)=>{
      console.log(err);
  })
}

return (
    
    <div style={{backgroundColor:'gray' }} className='container p-4'>
        <h1>א.צמנטיט באקה</h1>
<br/><br/>
         <form onSubmit={handelSubmit} >       
      <br/>
      <input onChange={(e)=>{setuserName(e.target.value)}} className='form-control' type='text' name='email' placeholder='user Name'></input>
       <br/> 
         <input onChange={(e)=>{setpassword(e.target.value)}} className='form-control' type='password'  name='password' placeholder='password'></input>
         <br/>
        
         <button className='btn btn-primary' type='submit' onClick={() => {}}>Log in</button>
      </form> 
       
       
         {/* <button className='btn btn-primary'  onClick={() => { mounted()}}>test token</button> */}
       {/* <button className='btn btn-primary' onClick={() => {localStorage.removeItem('token')
    val.setdata('')}}>log out</button> */}
       
        </div> 
    )
}
export default withRouter( Login)