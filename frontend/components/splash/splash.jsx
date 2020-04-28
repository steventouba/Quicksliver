import React from 'react'; 
import { Link } from 'react-router-dom'; 


const splash = () => { 

  return(
    <div className='splash-container'>
    <header className='splash-header' >
      <nav className='splash-left-nav'>
        <div>
          <Link className='splash-logo-link' to='/' >
            <img className='splash-logo'src={window.Logo}/>
            <div className='splash-logo-text'>QuickSilver </div>
          </Link>
        </div>
      </nav>
      <nav className='splash-right-nav'>
        <Link className='sign-in'to='/login'>Sign in</Link>
        <Link className='sign-up' to='/signup'>Get Started</Link>
        </nav>
    </header>
    <main className='splash-main'>
      <div className='splash-main-left'>
          <p>WORK FROM HOME</p>
          <h1>QuickSilver brings the team together, wherever you are</h1>
          <p>
            With all of your communication and tools in one place, 
            remote teams will stay productive no matter where your're working from.
          </p>
      </div>
      <div className='splash-main-right'>
        <img src={window.Hermes} />
      </div>
    </main>
      <div className='splash-footer'>
        <a href='https://www.linkedin.com/in/steven-touba-262197bb/' target='_blank'><i className='fab fa-linkedin'></i></a>
        <a href='https://github.com/steventouba' target='_blank'><i className='fab fa-github-square'></i></a>
      </div>
    </div>
  )
}

export default splash; 