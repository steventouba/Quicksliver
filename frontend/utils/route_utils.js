import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom'; 

const Auth = ({component: Component, path, loggedIn, exact},) => ( 
  <Route
    path={path}
    exact={exact}
    render={(props) => (
      !loggedIn ? ( 
        <Component {...props} /> 
      ) : ( 
        <Redirect to='/main/channels/1' /> 
      )
    )} 
  /> 
); 

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) => (
      loggedIn ? (
        <Component {...props} /> 
      ) : (
        <Redirect to='/' /> 
      )
    )}
  /> 
); 

const mapStateToProps = state => {

 return {
  loggedIn: Boolean(state.session.currentUser)
}
};

export const AuthRoute = withRouter(
  connect(mapStateToProps)(Auth)
); 

export const ProtectedRoute = withRouter(
  connect(mapStateToProps)(Protected)
); 