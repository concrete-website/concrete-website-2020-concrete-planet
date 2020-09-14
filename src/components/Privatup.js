import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { ContextStore } from "./Store";
// import { AuthContext } from "./Auth";
 // import { ContextStore, } from './Store'
 // val.setdata(val.data+1)
 const Privatup = ({ component: RouteComponent, ...rest }) => {
  const val = useContext(ContextStore)
  // const {currentUser} = useContext(AuthContext);
  // console.log({  ...rest ,component: RouteComponent});
  // localStorage.removeItem("my_item_key")
 
  let currentUser=val.data 
  return (
    <Route
      {...rest}
     component={(routeProps) =>
    !!currentUser ? (<RouteComponent {...routeProps} />):(<Redirect to={"/login"} />
       
        
          
        )
      }
    />
  );
};


export default Privatup