import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

function isAccessAllowed(hasAccess, store) {
  if (typeof hasAccess !== "function") {
    return hasAccess;
  }
  return hasAccess(store);
}

function PrivateRoute(props) {
  const { store, access, component: Component, render, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={props =>
        isAccessAllowed(access.if, store) ? (
          Component ? <Component {...props} /> : render()
        ) : (
            <Redirect
              to={{
                pathname: access.redirectTo,
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}

PrivateRoute.propTypes = {
  store: PropTypes.any,
  access: PropTypes.any,
  component: PropTypes.any,
  render: PropTypes.any,
  location: PropTypes.any
}

export default PrivateRoute;