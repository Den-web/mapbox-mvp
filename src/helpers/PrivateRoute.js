import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        rest.isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

// Validate Props
PrivateRoute.propTypes = {
  location: propTypes.string,
};

export default connect(mapStateToProps)(PrivateRoute)
