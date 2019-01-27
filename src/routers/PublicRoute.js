import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  // receives the auth state, the component(renamed) and the rest of the props named as "rest"
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? <Redirect to="/dashboard" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
});

// export the component PublicRoute that will be connected getting the state from redux as props
export default connect(mapStateToProps)(PublicRoute);
