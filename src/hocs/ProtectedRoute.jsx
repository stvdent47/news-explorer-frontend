import React from 'react';
import { Route, useHistory } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const history = useHistory();
  
  return (
    <>
      <Route exact path={props.path}>
        {() =>
          localStorage.getItem('jwt') ? (
            <Component {...props} />
          ) : (
            history.push('/', {
              noAuthRedirect: true,
            })
          )
        }
      </Route>
    </>
  );
};

export default ProtectedRoute;
