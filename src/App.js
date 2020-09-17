import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import { Store } from './components/Store';
import Createorder from './components/Createorder';
import Privateorders from './components/Privateorders';
import Update from './components/Update';
import orderforeorker from './components/orderforeorker';
import WorkerUpdatae from './components/WorkerUpdatae';
import io from 'socket.io-client'
// import {socket} from './components/socket';
import Privatup from './components/Privatup';
import Privateforworker from './components/Privateforworker';
import Privateupdw from './components/Privateupdw';
import Heder from './components/Heder';
import Allclients from './components/Allclients';
import PrivateCliant from './components/PrivateCliant';
var ignore= true
// const socket = io.connect('http://localhost:3000/')
function App() {
  

  // const socket = io('https://concrete-react.herokuapp.com/', {
  //   query: {
  //     token: localStorage.getItem('token'),
  //   },
  // });


  const [rendercomponent, setrendercomponent] = useState(false)
 
  
  

  var title = document.title;
  


function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  
  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    // setTimeout(() => {
      var notification = new Notification("Hi there!");
      // alert('you received a message')
      // }, 5000);
    }
    
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          
          var notification = new Notification("Hi there!");
          
          
          
        }
      });
    }
    
    // At last, if the user has denied notifications, and you 
    // want to be respectful there is no need to bother them any more.
  }
  
  
  // notifyMe() 
  ///////
 ///*************************************** */

// useEffect(() => {

 

//   socket.on('message', ({ name, data }) => {

 
//     if(ignore){ 
//       if(name !='home'){
    
//       notifyMe()}}
//       // setname1(name)
//        setTimeout(() => {
//     ignore= false
//   // console.log('second 500');
//   }, 500);



//       setTimeout(() => {
//         ignore= true
//         console.log('second 4000');
//       },10000);
//     })
// // console.log('effect');
//   },[])
      
///*************** */




  return (
    <div className="App">

{/* 
localStorage.setItem('myData', data);
To get a value:

localStorage.getItem('myData'); */}


   <Store>
      <Router>
        <div>

        {/* <Heder/> */}
     
          <PrivateRoute exact path="/" component={Home} />
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path='/login' component={Login} />
          <Privateorders exact path="/ord" component={Createorder} />
          {/* <Route exact path='/upd/:id' component={()=>{return <Update/>}}  /> */}
          <Privatup exact path='/upd/:id' component={Update}  />
          <Privateupdw exact path='/updw/:id' component={WorkerUpdatae} />
          <Privateforworker exact path='/worker' component={orderforeorker} />
          {/* <Route exact path='/ord'  component={()=> {return <Createorder/>}} /> */}
       <PrivateCliant exact path='/clients' component={Allclients}/>
          {/* <Route exact path="/signup" component={SignUp} /> */}
        </div>
        {/* {console.log('app rendered')} */}
      
{/* <Link to='/'> home </Link>
<Link to='/login'> login </Link>
<Link to='/ord'> create new order </Link>
<Link to='/worker'> create new order </Link> */}
      
   
     
           {/* {DisplayAndHide()} */}
{/* <button className='btn btn-primary' onClick={() => {emitms()}}>test soket-io</button> */}
      </Router>
   </Store>





    </div>
  );
}

export default App;
