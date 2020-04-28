import React from 'react'; 
import ReactDOM from 'react-dom'; 
import * as APIPostUtils from './utils/session_utils'; 
import configureStore from './store/store'; 
import Root from './components/root'; 


document.addEventListener("DOMContentLoaded", () => { 
  const root = document.getElementById('root'); 
  let store; 

  if (window.currentUser) { 
    const preloadedState = { 
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }, 
      session: {id: window.currentUser.id }
    }; 
    store = configureStore(preloadedState); 
    delete window.currentUser; 
  } else { 
    store = configureStore(); 
  }

  //Testing Start
  window.utils = APIPostUtils; 
  window.getState = store.getState; 
  window.dispatch = store.dispatch; 
  //Testing End 


  ReactDOM.render(<Root store={store}/>, root)
}); 