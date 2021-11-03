import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';


const PrivetRoute = ({children, ...rest}) => {
    
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center spinner">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      ></Route>
    );
};

export default PrivetRoute;