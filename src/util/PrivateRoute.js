import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, profile, ...rest }) => (
  <>

    <Route
      {...rest}
      render={(props) =>
        profile ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  </>
);

export default PrivateRoute;