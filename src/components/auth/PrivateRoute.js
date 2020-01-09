import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'

const PrivateRoute = ({ component: Component, ...rest}) => {
    const { currentUser } = useContext(AuthContext)
    return (
            <Route {...rest} render={props => {
                if (currentUser) {
                    return <Component {...props} />
                } else {
                    return <Redirect to='/login' />
                }
            }
        } />

    );
};

export default PrivateRoute;