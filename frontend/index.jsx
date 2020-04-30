import React from 'react'; 
import ReactDOM from 'react-dom'; 
import * as APIPostUtils from './utils/session_utils'; 
import {logOut} from './actions/session_actions';
import configureStore from './store/store'; 
import Root from './components/root'; 
import {fetchUserChannels} from './actions/channel_actions';


document.addEventListener("DOMContentLoaded", () => { 
  const root = document.getElementById('root'); 
  let store; 

  if (window.currentUser) { 
    const preloadedState = { 
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }, 
      session: {currentUser: window.currentUser }
    }; 
    store = configureStore(preloadedState); 
    delete window.currentUser; 
  } else { 
    store = configureStore(); 
  }

  //Testing Start
  window.utils = APIPostUtils; 
  window.fetchUserChannels = fetchUserChannels
  window.getState = store.getState; 
  window.dispatch = store.dispatch; 
  window.logOut = logOut
  //Testing End 


  ReactDOM.render(<Root store={store}/>, root)
}); 