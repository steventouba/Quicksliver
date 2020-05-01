import React from 'react'; 
import { Route, Switch } from 'react-router-dom'; 
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';
import LogInFormContainer from './session/login_form_container'; 
import SignUpFormContainer from './session/signup_form_container'; 
import MainChannelContainer from './channel/main_channel_container.jsx';
import MainChannel from './channel/main_channel';
import splash from './splash/splash';

const App = () => (
  
  <div className='app-body'>
    <Switch>
      <ProtectedRoute path='/main/:userId/:channelId' component={MainChannel} /> 
      <ProtectedRoute path='/main' component={MainChannelContainer} /> 
      {/* <ProtectedRoute path='/main/:userId' component={MainChannel} />  */}
      <AuthRoute path='/signup' component={SignUpFormContainer} />
      <AuthRoute path='/login' component={LogInFormContainer} />
      <Route exact path='/' component={splash} /> 
    </Switch>
  </div>

)

export default App; 