import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { AuthConsumer } from './AuthContext'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <AuthConsumer>
            {({ bearer }) => (
                <Route render={props =>
                    bearer ? <Component {...props} {...rest} bearer={bearer} />
                        : <Redirect to="/" />
                }

                />
            )}
        </AuthConsumer>
    )
}

export default ProtectedRoute;