import React, { useContext } from 'react'
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Card } from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import { ContextStore } from './Store';

let admin=false
 function Heder({history}) {
     const val = useContext(ContextStore)

    let iduserr=localStorage.getItem('id'); 
    if(iduserr=='5f54f79720960f4618748bbe'){
        admin=true
   }else{admin=false}


    return (
        <div>
    
          

<Navbar   collapseOnSelect expand='sm' bg="dark" variant="dark">


  <Navbar.Brand  href="#home">א.צמנטיט באקה</Navbar.Brand>
  <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav  style={{direction:'rtl'}}  className="ml-auto" >
    {/* style={{direction:'rtl'}} */}
    {/*  */}
    {/* as={Link} to='/' href="b" */}
      <Nav.Link style={{textAlign:'right'}} onClick={()=>{
          val.emitms1()
          history.push('/')}} >עמוד הבית ההזמנות</Nav.Link> 
     {admin? <Nav.Link style={{textAlign:'right'}}  as={Link} to='/ord' href="b" >צור הזמנה חדשה</Nav.Link>:''}
      {/* <Nav.Link style={{textAlign:'right'}}  href='https://anas3506606.wixsite.com/calculatecutting'>חישוב ארכים "WIX & JS"</Nav.Link> */}
      {/* <NavDropdown style={{textAlign:'right'}} title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item style={{textAlign:'right'}} href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item style={{textAlign:'right'}} href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item style={{textAlign:'right'}} href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item style={{textAlign:'right'}} href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
      
    
       
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
    )
}


export default withRouter(Heder)