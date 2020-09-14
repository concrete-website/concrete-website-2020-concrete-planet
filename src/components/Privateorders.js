import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { ContextStore } from "./Store";

 const Privateorders = ({ component: RouteComponent, ...rest }) => {
  const val = useContext(ContextStore)

 
  let currentUser=val.data 
  return (
    <Route
      {...rest}
      render={(routeProps) =>
    !!currentUser ? (<RouteComponent {...routeProps} />):(<Redirect to={"/login"} />
       
        
          
        )
      }
    />
  );
};


export default Privateorders