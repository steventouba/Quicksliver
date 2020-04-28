import React from 'react'; 
import { Link } from 'react-router-dom'; 


const splash = () => { 

  return(
    <>
    <header>
      <nav>
        <div>
          <Link to='/signup'>Get Started Today!</Link>
          <Link to='/login'>Log In</Link>
        </div>
        <div>
          <p>Insert slack Logo and my links here</p>
        </div>
      </nav>
    </header>
    <main>
      <p>Splash</p>
    </main>
    </>
  )
}

export default splash; 