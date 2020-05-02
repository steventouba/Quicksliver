import React from 'react'; 
import { Route, Switch } from 'react-router-dom'; 
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';
import LogInFormContainer from './session/login_form_container'; 
import SignUpFormContainer from './session/signup_form_container'; 
import splash from './splash/splash';
import ChannelShowContainer from './channel/channel_show_container';

const App = () => (
  
  <div className='app-body'>
    <Switch>
      <ProtectedRoute path='/main/channels/:channelId' component={ChannelShowContainer} /> 
      {/* <ProtectedRoute path='/main/:userId' component={MainChannel} />  */}
      <AuthRoute path='/signup' component={SignUpFormContainer} />
      <AuthRoute path='/login' component={LogInFormContainer} />
      <Route exact path='/' component={splash} /> 
    </Switch>
  </div>

)

export default App; 