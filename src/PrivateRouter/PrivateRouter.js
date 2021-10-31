import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRouter = ({ children, ...rest }) => {
    const { allContext } = useAuth();
    const { user, isLoading } = allContext;

    if (isLoading) {

        return (
            <div>
                <h1>Loading .......</h1>
            </div>
        )
    }


    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.displayName ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRouter;