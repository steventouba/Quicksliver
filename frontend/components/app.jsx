import React from 'react'; 
import { Route, Switch } from 'react-router-dom'; 
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';
import LogInFormContainer from './session/login_form_container'; 
import SignUpFormContainer from './session/signup_form_container'; 
import MainChannelDummyContainer from './channel/main_channel_dummy_container.jsx';
import splash from './splash/splash';
import GetChannelId from './channel/main_channel_show_container'
import MainChannel from './channel/main_channel_dummy';
import MainChannelShowContainer from './channel/main_channel_show_container';

const App = () => (
  
  <div className='app-body'>
    <Switch>
      <ProtectedRoute path='/main/:userId/:channelId' component={GetChannelId} /> 
      <ProtectedRoute path='/main' component={MainChannelDummyContainer} /> 
      {/* <ProtectedRoute path='/main/:userId' component={MainChannel} />  */}
      <AuthRoute path='/signup' component={SignUpFormContainer} />
      <AuthRoute path='/login' component={LogInFormContainer} />
      <Route exact path='/' component={splash} /> 
    </Switch>
  </div>

)

export default App; 