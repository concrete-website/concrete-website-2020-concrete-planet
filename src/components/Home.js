import React, { useState, useContext, useEffect } from 'react'
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Card } from 'react-bootstrap';

import { ContextStore } from './Store'
import Axios from 'axios'
import { ExportCSV } from './ExportCsv'
import { Link, withRouter } from 'react-router-dom'
// import io from 'socket.io-client'
// import {socket} from './socket'


let admin=false
// import { ContextStore, } from './Store'

// val.setdata(val.data+1)
let datat;
function Home({history}) {

    
// const socket = io('https://concrete-react.herokuapp.com/', {
//     query: {
//       token: localStorage.getItem('token'),
//     },
//   });

    const val = useContext(ContextStore)
    const[orderName,setorderName]=useState('')
    const [orders, setorders] = useState('')
    const[lastorder,setlastorder]=useState(3)
    const[flag,setflag]=useState(false)
    // const [rendercomponent, setrendercomponent] = useState(false)
    
    // const editOrder=()=>{
        
        let iduserr=localStorage.getItem('id'); 
        if(iduserr=='5f54f79720960f4618748bbe'){
            admin=true
       }else{admin=false}
        
        const getAll=() => {
       
       let ignore=false
    const getList=()=>{
       
        let token=localStorage.getItem('token'); 
        var config = {
        headers: { 
          'x-auth-token':token
          
        
          }
       }
     
    //  console.log('requested');
       Axios.get('https://concrete-react.herokuapp.com/users/get/'+null,config) 
    //    Axios.get('http://localhost:3000/users/get/'+lastorder,config) 
        
        .then((response) => {
            
             
                // setorders(response.data)
            //    setorders(response.data)
               val.setorders(response.data)
        // console.log(orders);
    }).catch((err)=>{
        // JSON.stringify(err)
        
          console.log(err);
          console.log('an error');
      })
    }
        getList();


}

// useEffect(() => {
//     function emitms1() {
//         let token=localStorage.getItem('token');
//         //*********************************************** */
//         socket.emit('message', { name:'home',message:token })
//         // console.log('em');
//             // setrendercomponent(!rendercomponent)
//             //************************************************* */
//         }

//         setTimeout(() => {
            
//             emitms1()
//         }, 1500);
        
        
        
//     })
//             socket.on('message', ({ name, data }) => {
//                 // setname1('on')
//                 console.log('on');
//                 //   let ignore=true
//                 // console.log(data );
//                 // setTimeout(() => {
                        
//                     // setorders(data)
//                     // emitms1()
//                 // }, 3000);
// console.log('usee effcet worked');

// })
// })
console.log('home rendered');
// const DisplayAndHide=()=>{
// if(flag) return( <div>My Component</div>)
// }
////
// function emitms() {
//     let token=localStorage.getItem('token');
//     //*********************************************** */
//     socket.emit('message', { name:'anas',message:token })
//     // console.log('em');
//         // setrendercomponent(!rendercomponent)
//         //************************************************* */
//     }
// delete order
const DeleteById=(id)=>{


    let token=localStorage.getItem('token'); 
    var config = {
    headers: { 
      'x-auth-token':token
      
    //   https://concrete-react.herokuapp.com
      }
   }
    // /delid/:id
Axios.delete('https://concrete-react.herokuapp.com/users/delid/'+id,config)
.then((res)=>{
    // console.log(res.data);
    // emitms()
    setTimeout(() => {
        
        val.emitms1()
    }, 1000);
}).catch((err)=>{
    console.log(err);
})


}
const convertDatecreate=(date)=>{
    var d2 = new Date(date); 
    let month=(+d2.getMonth())
    let month2=month+1
     let dateandtime=d2.getDate()+'/'+month2+'/'+ d2.getFullYear()+' '+ d2.getHours()+':'+d2.getMinutes()+':'+d2.getSeconds()
//    if(!(statusbtn=='b3')){dateandtime='לא מוכן/غير جاهز'}
    return dateandtime
    
}

const convertDate=(date,statusbtn)=>{
    var d2 = new Date(date); 
    // var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    // +' '+ d2.getHours+' '+d2.getTime+' '+d2.getSeconds
    let month=(+d2.getMonth())
    let month2=month+1
   let dateandtime=d2.getDate()+'/'+month2+'/'+ d2.getFullYear()+' '+ d2.getHours()+':'+d2.getMinutes()+':'+d2.getSeconds()
   if(!(statusbtn=='b3')){dateandtime='לא מוכן/غير جاهز'}
    return dateandtime
    } 

    const subid=(e)=>{
let id=e.substring(20)
return id
    }
    const renderdata=()=>{

    
        //   if(orders.data)  {
            if(val.orders)  {
    try {
       
    //  return orders.data.map((item,i)=>{
        return val.orders.map((item,i)=>{
            return(
                
              <div  key={i}style={{backgroundColor:'rgb(190, 185, 185)',marginBottom:'20px',marginTop:'30px' }}>
                  <h6>{i+1} :הזמנה</h6>
            <h4>ID: {subid(item._id)}</h4>
                  <h3>اسم الطلبيه/שם ההזמנה</h3>
                  <h4 style={{borderBottom:'1px solid gray'}}>{item.orderName}</h4>
{/* #f8f9fa */}

<h3>نوع الطلبيهَ/סוג ההזמנה</h3>
                  <h4 style={{borderBottom:'1px solid gray',backgroundColor: '#6c757d',marginBottom:'10px'}} >{item.orderType}</h4>
                  <h3>عنوان/כתובת</h3>
                  <h4 style={{borderBottom:'1px solid gray',marginBottom:'10px'}}>{item.orderDirection}</h4>
                  <h3>كوب/קוב</h3>
              <h4 style={{borderBottom:'1px solid gray',backgroundColor: '#6c757d',marginBottom:'10px'}}>{item.cupAmount}</h4>
              <h5>تاريخ ووقت انشاء الطلبيه</h5>
              <h6 style={{borderBottom:'1px solid gray',marginBottom:'10px'}}> {convertDatecreate(item.createdAt)} </h6>
              <h5>:تاريخ ووقت انهاء الطلبيه</h5>
            <h3 style={{borderBottom:'1px solid gray',paddingBottom:'10px',marginBottom:'10px'}}> {convertDate(item.dateFinished,item.finishOrder)} </h3>
{(item.finishOrder=='b2')?<h3 style={{backgroundColor:'#fd7e14'}} >בהכנה</h3>:''}

              {admin?<button className='btn btn-danger m-1' onClick={() => {
                  DeleteById(item._id)
                  }}>מחק הזמנה</button>:''}
             { admin? <Link className='btn btn-primary m-1' to={'/upd/'+item._id}> تعديل/עריכה </Link>:''}
             { <Link className='btn btn-primary m-1' to={'/updw/'+item._id}> حاله الطلبيه/המצב </Link>}
             {/* <Update/> */}
              </div> )
          })
          
     } catch (error) {
         console.log(error)
     }
   }}


//    const downloadTxtFile = () => {
//           const element = document.createElement("a");
//           const file = new Blob([document.getElementById('myInput').value], {type: 'text/plain'});
//           element.href = URL.createObjectURL(file);
//           element.download = "myFile.txt";
//           document.body.appendChild(element); // Required for this to work in FireFox
//           element.click();
//         }
   
   
     // install xsls and file-saver
// npm install xlsx file-saver --save





const downloadfunc=()=>{




Axios({
    url: 'http://localhost:3000/myFile.text',
    method: 'GET',
    responseType: 'blob', // important
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'file.text');
    document.body.appendChild(link);
    link.click();
  });
}
const editOrder=()=>{
    let iduser=localStorage.getItem('id'); 
    if(iduser=='5f54f79720960f4618748bbe'){
        // getAll()
    return<ExportCSV  csvData={val.orders} fileName={'newfile'} />}}



    return (
        <div>
        
        <div>
    

<Navbar   collapseOnSelect expand='md' bg="dark" variant="dark">
<button className='btn btn-primary m-1' onClick={() => {
            localStorage.removeItem('token')
            val.setdata('')}}>להתנתק</button>

  <Navbar.Brand  href="#home">א.צמנטיט באקה</Navbar.Brand>
  <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav  style={{direction:'rtl'}} className="ml-auto"  >
    {/* style={{direction:'rtl'}} */}
    {/*  */}
    {/* as={Link} to='/' href="b" */}
  < Nav.Link style={{textAlign:'right'}} onClick={() => { window.location.reload(false)}}>"Refresh" اظهار الطابيات/הצג הזמנות</Nav.Link >
      <Nav.Link style={{textAlign:'right'}} onClick={ ()=>{history.push('/')}} >עמוד הבית ההזמנות</Nav.Link> 
     {admin? <Nav.Link style={{textAlign:'right'}}  as={Link} to='/ord' href="b" >צור הזמנה חדשה</Nav.Link>:''}
     {admin? <Nav.Link style={{textAlign:'right'}}  as={Link} to='/clients' href="b" >חשבון הלקוחות</Nav.Link>:''}
     {/* getAll() */}
    <Nav.Link style={{textAlign:'right'}} onClick={() => { getAll()}} as={Link} to='/'  href="b" >كل الطلبيات/כל ההזמנות</Nav.Link>
    <NavDropdown onClick={()=>{}} style={{textAlign:'right'}} title="Download Excel file" id="collasible-nav-dropdown">
        {/* <NavDropdown.Item style={{textAlign:'right'}} href="#action/3.1">Action</NavDropdown.Item>        */}
         <div style={{textAlign:'right'}}>{editOrder()}</div>  
        <NavDropdown.Divider />
      
      </NavDropdown>
     
      {/* <button className='btn btn-primary' onClick={() => { getAll()}}> كل الطلبيات/כל ההזמנות</button> */}
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
<div className='container '>

        { renderdata()}
        {/* <button className='btn btn-primary' onClick={() => {emitms()}}>imaet</button> */}
        <br/>
       
            
            {/* <button className='btn btn-primary' onClick={() => {downloadfunc()}}>download</button> */}
           
            {/* <a href="http://localhost:3000/myFile.text ">My Word Doc</a> */}
         {/* <button className='btn btn-primary' onClick={() => {downloadTxtFile()}}>download native</button> */}
{/* <button className='btn btn-primary' onClick={() => { window.location.reload(false)}}>"Refresh" اظهار الطابيات/הצג הזמנות</button> */}
{/* <button onClick={() =>{ setflag(!flag)}}>Show/Hide</button>
     {DisplayAndHide()} */}
     
                
                </div>
                </div>
                )
            }
            export default  withRouter(Home)