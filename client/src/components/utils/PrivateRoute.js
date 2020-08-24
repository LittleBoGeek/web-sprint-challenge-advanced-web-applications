// must have the same api as route.
import React from 'react'
import { Route, Redirect} from 'react-router-dom'
const { Component } = require("react");


//checks if user is authentication. if yes renders component prop. if not redirects to login
const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
        {...rest}
        render={props => 
            localStorage.getItem('token') ? (
            <Component {...props} />
            ) : ( <Redirect to="/login"/> 
          )
    }
        />
    )
    
}

export default PrivateRoute