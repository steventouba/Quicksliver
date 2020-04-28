import React from 'react'; 
import { Route } from 'react-router-dom'; 
import LogInFormContainer from './session/login_form_container'; 
import SignUpFormContainer from './session/signup_form_container'; 
import splash from './splash/splash';
import MainChannelContainer from './channel/main_channel_container';

const App = () => (
  <div>
    <Route path='/main' component={MainChannelContainer} /> 
    <Route path='/login' component={LogInFormContainer} />
    <Route path='/signup' component={SignUpFormContainer} />
    <Route exact path='/' component={splash} /> 
  </div>

)

export default App; 