import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { Route, Redirect } from 'react-router-dom';

function Auth({component: RouteComponent, ...opts}) {
    
    const { loggedUser } = useContext(AuthContext);
    
    return (
        <Route 
            {...opts}
            render={routeProps => 
                !!loggedUser ? (
                    opts.initial ?
                        <Redirect to={'/browse'} /> :
                        <RouteComponent {...opts} />
                ) : (
                    opts.initial ?
                        <RouteComponent {...opts} /> :
                        <Redirect to={'/login'} />
                )
            }
        />
    )
}

export default Auth
