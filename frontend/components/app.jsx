import React from 'react'; 
import { Route } from 'react-router-dom'; 
import LogInFormContainer from './session/login_form_container'; 
import SignUpFormContainer from './session/signup_form_container'; 
import splash from './splash/splash';
import MainChannel from './channel/main_channel'

const App = () => (
  <div>
    <Route path='/login' component={LogInFormContainer} />
    <Route path='/signup' component={SignUpFormContainer} />
    <Route path='/main' component={MainChannel} /> 
    <Route exact path='/' component={splash} /> 
  </div>

  
  // <AuthRoute path='/login' component={} /> //login container 
  // <AuthRoute path='/signup' component={} /> //signin container
  // <Route exact path='/' component={} /> //render splash page 
  // </div>
)

export default App; 